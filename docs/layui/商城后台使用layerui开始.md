# layui.upload 功能 :open_file_folder:

**案例：商城平台商品管理系统-图片上传部分**

**每次传一张图，多次上传，done每次叠加触发，第四张图触发四次？**

**删除图片后，再次上传done不执行问题？**



解决代码片段：

before 修改为 choose

清空已上传队列  uploadListIns.config.elem.next()[0].value = '';

**最终效果**

![An image](../layui/assets/1591241165283.png)

**细节上代码**

```html
<input id="pictureInputHidden" name="pictureInputHidden" type="hidden" class="layui-input"/>
<div id="imgList" class="layui-upload-list"></div>
<button type="button" id="picBtn" class="layui-btn layui-btn-sm layui-btn-primary"><i class="layui-icon"></i>选择图片</button>
```

```js
//普通图片上传
  var uploadListIns = upload.render({
      elem: '#picBtn'
      , url: Feng.ctxPath + '/system/upload'
      , choose: function (obj) {
        var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
        obj.preview(function (index, file, result) {
          if($("#imgList .image-container").length<5){
            $('#imgList').append('<div class="image-container" id="container'+index+'" style="display: inline-block;">' +
              '<button id="upload_img_'+index+'" class="layui-btn"><i class="layui-icon"></i></button>\n' +
              '<img id="showImg'+index+'" class="layui-upload-img" width="92px" height="92px" src="'+ result +'" alt="'+ file.name +'" ></div>')
            $("#upload_img_" + index).bind('click', function () {
              delete files[index];
              $("#container"+index).remove();
              $("#picBtn").css("display","inline-block");
              uploadListIns.config.elem.next()[0].value = '';
              inputImgVal();
            });
          }else{
            Feng.error("上传图片失败！最多5张图片");
          }
        });
      }
      , done: function (res, index, upload) {
        delete this.files[index];
        var idx = $("#imgList .image-container").length;
        if(idx==5){
          $("#picBtn").css("display","none");
        }
        if(idx<=5){
          $("#container"+index).attr("data-fileId",res.data.fileId);
          inputImgVal();
          Feng.success(res.message);
        }else{
          Feng.error("上传图片失败！最多5张图片");
        }
      }
      , error: function () {
        Feng.error("上传图片失败！");
      }
    });

```

**获取最后的结果**

```js
var uploadImgVal = "";
//给input传值
function inputImgVal() {
  var uploadImgArr = [];
  $("#imgList .image-container").each(function (k,v) {
    uploadImgArr.push($(this).attr("data-fileId"));
    uploadImgVal = uploadImgArr.join();
    console.log(uploadImgVal);
  })
}
```



