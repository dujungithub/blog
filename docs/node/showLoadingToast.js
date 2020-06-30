
var life = 5;
var fentop = 0;
var jia = 0;

$("canvas").on("contextmenu", function(e) {
	e.preventDefault();
})
$("canvas").on("touchmove", function(e) {
	e.preventDefault();
})
$("canvas").on("touchstart", function(e) {
	if (g_isUpdate) {
		if (!isBallInit) {
			if (g_canTouch) {
				clearTimeout(stayTimeout);
				clearInterval(changeAnimate)
				$("#music2").attr("src", "audio/jump.mp3");
				$("#music2")[0].pause();
				$("#music2")[0].play();
				$("#music4")[0].pause();
				g_touchStartTime = new Date().getTime();
				g_touchT = 1;
				g_isTouch = true;
				g_origin_ball = {};
				g_origin_ball.x = g_ball.x;
				g_origin_ball.y = g_ball.y;
				g_ballStayStartTime = 0;
			}
		}
	}
})
$("canvas").on("touchend", function(e) {
	if (g_isUpdate == true) {
		if (!isBallInit) {
			if (g_canTouch && g_isTouch) {
				$("#music2")[0].pause();
				g_touchLevel = g_touchT;
				g_touchEndTime = new Date().getTime();
				g_isTouch = false;
				g_canTouch = false;
			}
		}
	}
})
$(".start_game").on("click", function() {
	if ($("#end").val() == "1") {
		showDialog('活动已结束');
		return false;
	}
	if (!g_isGameStart) {
		life--;
		g_isGameStart = true;
		if (game || game2) {
			game = new Object();
			game2 = new Object();
		}
		$("#music").attr("src", "audio/start_btn.mp3");
		$("#music")[0].pause();
		$("#music")[0].play();
		$(".brick").addClass("brickMove");
		$(".brick").removeClass("brick");
		for (var i = 0; i < 6; i++) {
			if (i == 0 || i == 2 || i == 5) $($(".brickMove")[i]).addClass("brickLeft");
			else $($(".brickMove")[i]).addClass("brickRight");
		}
		setTimeout(function() {
			$(".homePanel").hide();
			$(".brickMove").removeClass("brickLeft");
			$(".brickMove").removeClass("brickRight");
			$(".brickMove").addClass("brick");
			$(".brick").removeClass("brickMove");
			$(".gamePanel").show();
			$(".score").html("00");
			g_drumpNum = 0;
			g_currentScoreAdd = 2;
			game = new Game("gameCanvas");
			for (var i = 0; i < 2; i++) {
				g_boxArr[i] = copyObject(g_boxArrDefined[Math.floor(Math.random() * 8)]);
				if (i == 0) {
					g_boxArr[i].y = 480;
					g_boxArr[i].x = -100;
				} else {
					g_boxArr[i].y = g_boxArr[i - 1].y - 480;
					g_boxArr[i].x = g_boxArr[i - 1].x;
				}
			}
			game.initCanvas(g_ball, g_boxArr);
			update();
			$("#music").attr("src", "audio/start.mp3");
			$("#music")[0].pause();
			$("#music")[0].play();
		}, 700);
	}
})
//再来一次
$(".again").on("click", function() {
	share();
	$(".homePanel").show();
	$(".resultPanel").hide();
	$(".gamePanel").hide();
})
/*$(".sharePanel").on("click", function() {
	$(this).hide();
})*/
/*$(".rank_p3_get").on("click", function() {
	if ($("#reg").val() == 1) {
		$("#regname").prop("disabled", true).prop("readonly", true);
		$("#regtel").prop("disabled", true).prop("readonly", true);
		$('.submit_start').hide();
		$('.submit_end').show();
	} else {
		$('#myci').html(z.myci);
		$('.submit_start').show();
		$('.submit_end').hide();
	}
	$(".infoPanel").show();
})*/
/*$(".drawNow, .help_chou").on("click", function() {
	location.href = 'draw/';
})
$(".drawWant").on("click", function() {
	$(".sharePanel").show();
	$(".shareScore").html($(".score").html())
})
$(".secret").on("click", function() {
	$(".highScorePanel").show();
})*/
$(".close").on("click", function() {
	$(this).parent().parent().hide();
})
/*$("#rank_btn2").on("click", function() {
	cha(2);
})
$(".help_invite").on("click", function() {
	$(".shareScore").html(parseInt($("#nowfen").html()))
	$(".sharePanel").show();
})*/
//返回首页
$(".back_home,.back_btn").on("click", function() {
	$(".rulesPanel").hide();
	$(".homePanel").show();
	$(".gamePanel").hide();
})
$(".trophyPanel").on("click", function() {
	showLoadingToast('查询中');
	showDialog("提交成功", function() {
		closeDialog();
	})
})


function update() {
	g_isUpdate = true;
	ballInterval = setInterval(function() {
		if (isBallInit) {
			g_ball.x += 75;
			g_ball.y += 75;
			if (g_ball.x >= g_ball_initX) {
				isBallInit = false;
			}
		} else {
			touchWindow();
		}
		game.initCanvas(g_ball, g_boxArr);
	}, g_timeInterval);
}

function touchWindow() {
	if (g_canTouch) {
		if (g_isTouch) {
			g_touchT = parseInt((new Date().getTime() - g_touchStartTime) / g_timeInterval / 1.4);
			if (g_touchT >= 13) g_touchT = 13;
			if (g_touchT < 1) g_touchT = 1;
			g_boxArr[g_boxArr.length - 2].index = g_touchT;
			if (g_touchT >= 12) g_ball.type = 12;
			else g_ball.type = g_touchT;
			g_ball.x = g_origin_ball.x + 12 * g_touchT;
			g_ball.y = g_origin_ball.y + 12 * g_touchT;
		}
	} else {
		if (!g_isTouch) {
			g_touchT -= parseInt((new Date().getTime() - g_touchEndTime) / g_timeInterval / 1.4);
			if (g_touchT < 1) {
				g_touchT = 1;
				clearInterval(ballInterval);
				g_boxArr.index = 1;
				g_ball.type = 1;
				g_ball.x = g_origin_ball.x;
				g_ball.y = g_origin_ball.y;
				g_boxArr[g_boxArr.length - 2].index = g_touchT;
				g_ball.type = g_touchT;
				$("#music")[0].pause();
				jump();
			} else {
				g_boxArr[g_boxArr.length - 2].index = g_touchT;
				g_ball.type = g_touchT;
			}
		}
	}
}

function jump() {
	var ballStopPosition = {};
	if (g_currentDirection == 1) {
		g_ball.x = g_boxArr[g_boxArr.length - 1].x + g_box_w / 2 - g_ball_w;
		ballStopPosition.y = g_ball.y - (g_touchLevel * g_v);
		ballStopPosition.x = g_ball.x;
	} else {
		if (g_boxArr[g_boxArr.length - 1].type == 9) {
			g_ball.y = g_boxArr[g_boxArr.length - 1].y - g_box_9_h / 2 + g_ball_w;
		} else {
			g_ball.y = g_boxArr[g_boxArr.length - 1].y - g_box_w / 2 + g_ball_w;
		}
		ballStopPosition.y = g_ball.y;
		ballStopPosition.x = g_ball.x - (g_touchLevel * g_v);
	}
	var point1 = pointParse(g_ball.x, g_ball.y);
	var point2 = pointParse(ballStopPosition.x, ballStopPosition.y);
	var x = point1.x + (point2.x - point1.x) * 2 / 3;
	var y = point2.y - (point1.y - point2.y) * 1.5;
	var t = 0;
	jumpInter = setInterval(function() {
		t += 0.085;
		var rx = (1 - t) * (1 - t) * point1.x + 2 * t * (1 - t) * x + t * t * point2.x;
		var ry = (1 - t) * (1 - t) * point1.y + 2 * t * (1 - t) * y + t * t * point2.y;
		var point = {
			"x": rx,
			"y": ry,
			"w": g_ball.w,
			"h": g_ball.h,
			"type": g_ball.type
		};
		game.drumpDraw(point, g_boxArr);
		if (t >= 1) {
			clearInterval(jumpInter);
			g_ball.x = ballStopPosition.x;
			g_ball.y = ballStopPosition.y;
			g_isTouch = false;
			if (testBoxPosition()) {
				if (g_ballStayNum != g_boxArr.length - 2) {
					g_drumpNum++;
					createBox();
					g_ballStayStartTime = new Date().getTime();
					stayTimeout = setTimeout(function() {
						if (new Date().getTime() - g_ballStayStartTime >= 2000 && new Date().getTime() - g_ballStayStartTime <= 10000) {
							switch (g_boxArr[g_boxArr.length - 2].type) {
							case 9:
								{
									var score = parseInt($(".score").html()) + 10;
									currentTip = 10;
									setScore(score);
									$("#music4").attr("src", "audio/9.mp3");
									$("#music4")[0].pause();
									$("#music4")[0].play();
									var changeStartTime = new Date().getTime();
									changeAnimate = setInterval(function() {
										var changeNum = parseInt((new Date().getTime() - changeStartTime) / g_timeInterval / 4);
										g_boxArr[g_boxArr.length - 2].index = 14 + changeNum;
										if (changeNum >= 14) {
											g_boxArr[g_boxArr.length - 2].index = 1;
											clearInterval(changeAnimate);
										}
									}, g_timeInterval)
									break;
								}
							case 10:
								{
									var score = parseInt($(".score").html()) + 20;
									currentTip = 20;
									setScore(score);
									$("#music4").attr("src", "audio/10.mp3");
									$("#music4")[0].pause();
									$("#music4")[0].play();
									var changeStartTime = new Date().getTime();
									changeAnimate = setInterval(function() {
										var changeNum = parseInt((new Date().getTime() - changeStartTime) / g_timeInterval / 4);
										g_boxArr[g_boxArr.length - 2].index = 14 + changeNum;
										if (changeNum >= 14) {
											g_boxArr[g_boxArr.length - 2].index = 1;
											clearInterval(changeAnimate);
										}
									}, g_timeInterval)
									break;
								}
							case 11:
								{
									var score = parseInt($(".score").html()) + 15;
									currentTip = 15;
									setScore(score);
									$("#music4").attr("src", "audio/11.mp3");
									$("#music4")[0].pause();
									$("#music4")[0].play();
									var changeStartTime = new Date().getTime();
									changeAnimate = setInterval(function() {
										changeStartTime++;
										var changeNum = parseInt((new Date().getTime() - changeStartTime) / g_timeInterval / 4);
										g_boxArr[g_boxArr.length - 2].index = 14 + changeNum;
										if (changeNum >= 14) {
											g_boxArr[g_boxArr.length - 2].index = 1;
											clearInterval(changeAnimate);
										}
									}, g_timeInterval)
									break;
								}
							case 12:
								{
									$("#music4").attr("src", "audio/12.mp3");
									$("#music4")[0].pause();
									$("#music4")[0].play();
									currentTip = 5;
									var score = parseInt($(".score").html()) + 5;
									setScore(score);
									var changeStartTime = new Date().getTime();
									changeAnimate = setInterval(function() {
										changeStartTime++;
										var changeNum = parseInt((new Date().getTime() - changeStartTime) / g_timeInterval / 4);
										g_boxArr[g_boxArr.length - 2].index = 14 + changeNum;
										if (changeNum >= 14) {
											g_boxArr[g_boxArr.length - 2].index = 1;
											clearInterval(changeAnimate);
										}
									}, g_timeInterval)
									break;
								}
							case 13:
								{
									var score = parseInt($(".score").html()) + 30;
									currentTip = 30;
									setScore(score);
									$("#music4").attr("src", "audio/13.mp3");
									$("#music4")[0].pause();
									$("#music4")[0].play();
									var changeStartTime = new Date().getTime();
									changeAnimate = setInterval(function() {
										changeStartTime++;
										var changeNum = parseInt((new Date().getTime() - changeStartTime) / g_timeInterval / 4);
										g_boxArr[g_boxArr.length - 2].index = 14 + changeNum;
										if (changeNum >= 14) {
											g_boxArr[g_boxArr.length - 2].index = 1;
											clearInterval(changeAnimate);
										}
									}, g_timeInterval)
									break;
								}
							}
							if (g_boxArr[g_boxArr.length - 2].type >= 9) gameTipsShow(pointParse(g_ball.x, g_ball.y).x, pointParse(g_ball.x, g_ball.y).y, 150, currentTip);
						}
					}, 2000)
				} else {
					g_canTouch = true;
					update()
				}
			} else {
				clearTimeout(stayTimeout);
				var nowY = g_ball.y;
				var nowX = g_ball.x;
				var now = new Date().getTime();
				var directionY;
				var distanceLevel;
				if (g_currentDirection == 1) {
					directionY = g_currentDistanceMoveY;
					distanceLevel = (g_boxArr[g_boxArr.length - 2].y - g_boxArr[g_boxArr.length - 1].y) / g_v;
				} else {
					distanceLevel = (g_boxArr[g_boxArr.length - 2].x - g_boxArr[g_boxArr.length - 1].x) / g_v;
					directionY = g_currentDistanceMoveX;
				}
				if (distanceLevel <= 6) {
					$("#music").attr("src", "audio/fail.mp3");
					$("#music")[0].pause();
					$("#music")[0].play();
					setTimeout(function() {
						gameOver();
					}, 100)
					game.initCanvas(g_ball, g_boxArr);
				} else {
					var tt = setInterval(function() {
						var times = parseInt((new Date().getTime() - now) / g_timeInterval);
						g_ball.y = nowY + (g_box_h / 5) * times;
						g_ball.x = nowX + (g_box_w / 5) * times;
						if (times >= 5) {
							$("#music").attr("src", "audio/fail.mp3");
							$("#music")[0].pause();
							$("#music")[0].play();
							clearInterval(tt);
							setTimeout(function() {
								gameOver();
								$(".resultPanel").show();
							}, 100)
						}
						if (g_touchLevel + directionY - distanceLevel > 1.5 || directionY > 1.5) {
							game.initCanvas2(g_ball, g_boxArr);
						} else {
							game.initCanvas3(g_ball, g_boxArr);
						}
					}, g_timeInterval);
				}
			}
		}
	}, g_timeInterval);
}

function createBox() {
	g_currentDirection = Math.floor(Math.random() * 2 + 1);
	var box_type = randomBox();
	var box = copyObject(g_boxArrDefined[box_type]);
	if (g_boxArr[g_boxArr.length - 1].type == 13) {
		g_currentDirection = 2;
		g_tempBox.x = g_boxArr[g_boxArr.length - 1].x - (60 * Math.floor(Math.random() * 4 + 1)) - 480;
		g_tempBox.y = g_boxArr[g_boxArr.length - 1].y;
		box.x = g_tempBox.x - 700;
		box.y = g_tempBox.y - 700;
	} else {
		if (g_currentDirection == 1) {
			g_tempBox.x = g_boxArr[g_boxArr.length - 1].x;
			g_tempBox.y = g_boxArr[g_boxArr.length - 1].y - (60 * Math.floor(Math.random() * 4 + 1)) - 480;
			box.x = g_tempBox.x - 700;
			box.y = g_tempBox.y - 700;
		} else {
			g_tempBox.x = g_boxArr[g_boxArr.length - 1].x - (60 * Math.floor(Math.random() * 4 + 1)) - 480;
			g_tempBox.y = g_boxArr[g_boxArr.length - 1].y;
			box.x = g_tempBox.x - 700;
			box.y = g_tempBox.y - 700;
		}
	}
	g_boxArr.push(box);
	box.x = g_tempBox.x;
	box.y = g_tempBox.y;
	if (g_boxArr.length > 6) {
		g_boxArr.splice(0, 1);
	}
	$("#music3").attr("src", "audio/down.mp3");
	$("#music3")[0].pause();
	$("#music3")[0].play();
	var downStartTime = new Date().getTime();
	var downInterval = setInterval(function() {
		var downDuringTime = 7 - parseInt((new Date().getTime() - downStartTime) / g_timeInterval);
		g_boxArr[g_boxArr.length - 1].x = g_tempBox.x - downDuringTime * 100;
		g_boxArr[g_boxArr.length - 1].y = g_tempBox.y - downDuringTime * 100;
		if (downDuringTime <= 0) {
			g_boxArr[g_boxArr.length - 1].x = g_tempBox.x;
			g_boxArr[g_boxArr.length - 1].y = g_tempBox.y;
			clearInterval(downInterval);
			moveView();
		}
		game.initCanvas(g_ball, g_boxArr);
	}, g_timeInterval)
}

function randomBox() {
	var num = Math.floor(Math.random() * 45);
	if (num < 5) {
		num = 0;
	} else if (num < 10) {
		num = 1;
	} else if (num < 15) {
		num = 2;
	} else if (num < 20) {
		num = 3;
	} else if (num < 25) {
		num = 4;
	} else if (num < 30) {
		num = 5;
	} else if (num < 35) {
		num = 6;
	} else if (num < 40) {
		num = 7;
	} else if (num < 41) {
		num = 8;
	} else if (num < 42) {
		num = 9;
	} else if (num < 43) {
		num = 10;
	} else if (num < 44) {
		num = 11;
	} else if (num < 45) {
		num = 12;
	}
	return num;
}

function moveView() {
	var point = {};
	var t = 0;
	point.x = (g_boxArr[g_boxArr.length - 1].x + g_boxArr[g_boxArr.length - 2].x) / 2 + 200;
	point.y = (g_boxArr[g_boxArr.length - 1].y + g_boxArr[g_boxArr.length - 2].y) / 2 - 100;
	var viewInterval = setInterval(function() {
		t++;
		if (t >= 5) {
			clearInterval(viewInterval);
			for (var i = 0; i < g_boxArr.length; i++) {
				g_boxArr[i].x -= point.x / 5;
				g_boxArr[i].y -= point.y / 5;
			}
			g_ball.x -= point.x / 5;
			g_ball.y -= point.y / 5;
			gameTipsShow(pointParse(g_ball.x, g_ball.y).x, pointParse(g_ball.x, g_ball.y).y, 150, currentTip);
			game.initCanvas(g_ball, g_boxArr);
			g_canTouch = true;
			update()
		} else {
			for (var i = 0; i < g_boxArr.length; i++) {
				g_boxArr[i].x -= point.x / 5;
				g_boxArr[i].y -= point.y / 5;
			}
			g_ball.x -= point.x / 5;
			g_ball.y -= point.y / 5;
			game.initCanvas(g_ball, g_boxArr);
		}
	}, g_timeInterval)
}

function testBoxPosition() {
	var t = -1;
	var distanceLevel = 0;
	if (g_currentDirection == 1) {
		g_currentDistanceMoveX = 0;
		distanceLevel = (g_boxArr[g_boxArr.length - 2].y - g_boxArr[g_boxArr.length - 1].y) / g_v;
		if (Math.abs(distanceLevel - g_touchLevel - g_currentDistanceMoveY) <= 2.5) {
			g_currentDistanceMoveY = g_touchLevel - distanceLevel;
			if (g_currentDistanceMoveY == 0) {
				var score = parseInt($(".score").html()) + g_currentScoreAdd;
				currentTip = g_currentScoreAdd;
				g_currentScoreAdd += 2;
				if (g_currentScoreAdd == 32) g_currentScoreAdd = 32;
				$("#music").attr("src", "audio/special.mp3");
				$("#music")[0].pause();
				$("#music")[0].play();
				setScore(score);
			} else {
				var score = parseInt($(".score").html());
				score++;
				currentTip = 1;
				g_currentScoreAdd = 2;
				setScore(score);
				$("#music").attr("src", "audio/normal.mp3");
				$("#music")[0].pause();
				$("#music")[0].play();
			}
			g_ballStayNum = g_boxArr.length - 1;
			return true;
		} else {
			if (Math.abs(g_touchLevel + g_currentDistanceMoveY) <= 2.5) {
				g_ballStayNum = g_boxArr.length - 2;
				g_currentDistanceMoveY = g_touchLevel + g_currentDistanceMoveY;
				$("#music").attr("src", "audio/normal.mp3");
				$("#music")[0].pause();
				$("#music")[0].play();
				return true;
			} else {
				return false;
			}
		}
	} else {
		g_currentDistanceMoveY = 0;
		distanceLevel = (g_boxArr[g_boxArr.length - 2].x - g_boxArr[g_boxArr.length - 1].x) / g_v;
		if (Math.abs(distanceLevel - g_touchLevel - g_currentDistanceMoveX) <= 2.5) {
			g_currentDistanceMoveX = g_touchLevel - distanceLevel;
			if (g_currentDistanceMoveX == 0) {
				var score = parseInt($(".score").html()) + g_currentScoreAdd;
				currentTip = g_currentScoreAdd;
				g_currentScoreAdd += 2;
				if (g_currentScoreAdd == 32) g_currentScoreAdd = 32;
				$("#music").attr("src", "audio/special.mp3");
				$("#music")[0].pause();
				$("#music")[0].play();
				setScore(score);
			} else {
				var score = parseInt($(".score").html());
				score++;
				currentTip = 1;
				g_currentScoreAdd = 2;
				$("#music").attr("src", "audio/normal.mp3");
				$("#music")[0].pause();
				$("#music")[0].play();
				setScore(score);
			}
			g_ballStayNum = g_boxArr.length - 1;
			return true;
		} else {
			if (Math.abs(g_touchLevel + g_currentDistanceMoveX) <= 2.5) {
				g_currentDistanceMoveX = g_touchLevel + g_currentDistanceMoveX;
				g_ballStayNum = g_boxArr.length - 2;
				$("#music").attr("src", "audio/normal.mp3");
				$("#music")[0].pause();
				$("#music")[0].play();
				return true;
			} else {
				return false;
			}
		}
	}
}

function gameTipsShow(x, y, time, score) {
	$(".game_tip").css("left", x + "px");
	$(".game_tip").css("top", y - 50 + "px");
	$(".game_tip").html("+" + score);
	$(".game_tip").fadeIn(time).delay(time).fadeOut(time);
}

function gameOver() {
	g_isGameStart = false;
	hideResult();
	isBallInit = true;
	g_isUpdate = false;
	g_boxArr.length = 0;
	g_canTouch = true;
	g_touchStartTime = 0;
	g_touchEndTime = 0;
	g_touchT = 0;
	g_isTouch = false;
	g_ball = {
		"type": 1,
		"w": 84,
		"h": 77,
		"x": -475,
		"y": -120
	}
	g_currentDirection = 1;
	g_ballStayNum = 0;
	g_isTouchNoDrump = false;
	g_currentDistanceMoveX = 0;
	g_currentDistanceMoveY = 0;
	clearInterval(ballInterval);
	clearInterval(changeAnimate);
	if (window.localStorage.getItem("highScore") == undefined || parseInt(window.localStorage.getItem("highScore")) < parseInt($(".score").html())) window.localStorage.setItem("highScore", parseInt($(".score").html()));
	$(".result_score").html($(".score").html());
	var score = $(".score").html();
	score = parseInt(score);
	if (score > fentop) fentop = score;
	$(".resultPanel").show();
	$("#fentop").html(fentop);
	$('.todaylife').html(life);
	if (parseInt($(".score").html()) >= 66) {
		$(".result_tip1").show();
		$(".result_tip_top1").show();
		$(".drawNow").show();
	} else {
		share('123456');
		$(".result_tip5").show();
		$(".result_tip_top2").show();
		var lessNum = 66 - parseInt($(".score").html());
		$(".lessScore").html(lessNum)
		$(".drawWant").show();
	}
}

function hideResult() {
	$(".result_tip1").hide();
	$(".result_tip2").hide();
	$(".result_tip3").hide();
	$(".result_tip4").hide();
	$(".result_tip5").hide();
	$(".result_tip_top1").hide();
	$(".result_tip_top2").hide();
	$(".result_tip_top3").hide();
	$(".result_tip_top4").hide();
	$(".draw").hide();
}

function copyObject(orig) {
	var copy = Object.create(Object.getPrototypeOf(orig));
	copyOwnPropertiesFrom(copy, orig);
	return copy;
}

function copyOwnPropertiesFrom(target, source) {
	Object.getOwnPropertyNames(source).forEach(function(propKey) {
		var desc = Object.getOwnPropertyDescriptor(source, propKey);
		Object.defineProperty(target, propKey, desc);
	});
	return target;
}

function setScore(num) {
	if (num < 10) {
		num = '0' + num;
	}
	$(".score").html(num);
}

function orientLayer() {
	var orientCSS = ['<style>', '   @-webkit-keyframes rotation {', '      10% {', '          -webkit-transform: rotate(90deg);', '                  transform: rotate(90deg);', '      }', '      50% {', '          -webkit-transform: rotate(0deg);', '                  transform: rotate(0deg);', '      }', '      60% {', '          -webkit-transform: rotate(0deg);', '                  transform: rotate(0deg);', '      }', '      90% {', '          -webkit-transform: rotate(90deg);', '                  transform: rotate(90deg);', '      }', '      100% {', '          -webkit-transform: rotate(90deg);', '                  transform: rotate(90deg);', '      }', '   }', '   @keyframes rotation {', '       10% {', '           -webkit-transform: rotate(90deg);', '                   transform: rotate(90deg);', '       }', '       50% {', '           -webkit-transform: rotate(0deg);', '                   transform: rotate(0deg);', '       }', '       60% {', '           -webkit-transform: rotate(0deg);', '                   transform: rotate(0deg);', '       }', '       90% {', '           -webkit-transform: rotate(90deg);', '                   transform: rotate(90deg);', '       }', '       100% {', '           -webkit-transform: rotate(90deg);', '                   transform: rotate(90deg);', '       }', '   }', '   #orientLayer {', '       display: none;', '   }', '   @media screen and (min-aspect-ratio: 12/7) {', '       #orientLayer {', '           display: block;', '       }', '   }', '   .mod-orient-layer {', '       display: none;', '       position: fixed;', '       height: 100%;', '       width: 100%;', '       left: 0;', '       top: 0;', '       right: 0;', '       bottom: 0;', '       background: #333;', '       z-index: 9997;', '   }', '   .mod-orient-layer__content {', '       position: absolute;', '       width: 100%;', '       top: 45%;', '       margin-top: -75px;', '       text-align: center;', '   }', '   .mod-orient-layer__icon-orient {', '       background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAXVBMVEUAAAD29vb////x8fH////////x8fH5+fn29vby8vL////5+fn39/f6+vr////x8fH////////+/v7////09PT////x8fH39/f////////////////////x8fH///+WLTLGAAAAHXRSTlMAIpML+gb4ZhHWn1c2gvHBvq1uKJcC6k8b187lQ9yhhboAAAQYSURBVHja7d3blpowFIDhTUIAOchZDkre/zE7ycySrbUUpsRN2/1fzO18KzEqxEVgTiZNfgmmtxRc8iaR8HNe8x4BtjQePKayYCIoyBSgvNNE1AkNSHqZyLqk97EgUCCHBzZ5mkg7ScvIJuIyOyXBRFxgpqWZyGsAZLB1KjsJi8nutHU4JCRbFRH8tmirI9k8Jx2sqNs8K/m0LQkrktO2crgcgXGB4AiTEsB0hJfo9MGgX7CGcYiYwQxmMOOvZwRhBG8tCoMXjBDeXvWCEcHbi14wgCBmMIMZzGAGM5jxETNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxY6E2rUQxnH2tz9cirlJFwFBJedaPnUv0M7++egPDE8iAJcIDmxwH5wwv9vUviw2kLbVO3TJU5uul/EyB0FoLp4x60PdGUd3qPurrWyjGGTc05u+1dcgI7/+tCCPARWGhH7o5Y7RCf+bH9ctXLp6v2BVDxfqz0oPXeSVaNtINo/1SXDv4dck8IIkbhtC2ol+iouEonTBCbYvVMnXOjxww6s/RFrBUpXHh/gw1rHj5d/qhYn9Gpk2FWh6xRBRX5Oj3Znh2Sq49/L6+y8pB26q9GbE2dbA2mVbx6I+7MfBglLCttm73ZQi7AD3iL4HqjFYJHSPRppqaUaJ3ATpGa+ckpGak2hRRMyqjGMkvl+xyFeSMwjAqcsZgGDdyhl0oNTnDN4yenJGZFGxNChP5/Y3efh6SM2rDOJMzboYxkDMqwyjIGcIw6F+io2FU1IxIm1JqRmgXSkvNKNCXeTpGrU0JNSO2c6LIGPgCS8AuDHz9ta0SXWDtxoDRH+MqlbC2Dt2G2JFRadtQZt2qq/orGowdGb2euxYiqWEpVWhTBnszoNAPdStuQwxqf0aocdWKW4Z+DfszIh8pxJqbuCE4YAC+4bm0evtipjpgJHeFnyyt1Ku2xa0bhjxr27p75rECNwyI9ZwvXkHq+7aTaMEV44YYy/spfgjgjNHaWW+GeUhGEX7tLlVinIFDDSgnOwhi1V6bU0b6tVS9eAERe863g4dRrtiHdc6o+nn5vtyVVgR79Cqt4uL6gfHPQyGqtP2vf7HADGbcYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JjhtOM+J/AgT008yDMkN/dPP9hzS8zAMQN3OEYeekp5YU7KOKXwVXqiY+QS7smcinGKABWdiBgpPJTSMHJ4KidhhPBUSMLw4CmPhKHgKUXCkHsygum71ftNSgCX6bsl8FQyfbcL5EdYsDk0R3j7aiA5wpt5AjKg/2gLJEBD/0Hf2OOf/vRrj6z/7GtP4B3nMKyjHA12kIPSjnJs3FEO0TvKkYJHOWCR+rjJH0Vn6fI5PjNbAAAAAElFTkSuQmCC);', '       display: inline-block;', '       width: 67px;', '       height: 109px;', '       -webkit-transform: rotate(90deg);', '               transform: rotate(90deg);', '       -webkit-animation: rotation infinite 1.5s ease-in-out;', '               animation: rotation infinite 1.5s ease-in-out;', '       -webkit-background-size: 67px;', '               background-size: 67px;', '   }', '   .mod-orient-layer__desc {', '       margin-top: 20px;', '       font-size: 15px;', '       color: #fff;', '   }', '   .qr-box {', '       display: none;', '   }', '   @media only screen', '       and (min-width : 1023px){', '       #orientLayer {', '           display: none;', '       }', '   }', '</style>'].join('');
	$('body').append(orientCSS.replace(/ /g, ''));
	var orientHTML = ['<div id="orientLayer" class="mod-orient-layer">', '   <div class="mod-orient-layer__content">', '       <i class="icon mod-orient-layer__icon-orient"></i>', '       <div class="mod-orient-layer__desc">为了更好的体验，请使用竖屏浏览</div>', '   </div>', '</div>'].join('');
	$('body').append(orientHTML);
}

function showDialog() {
	var a = arguments[0] ? arguments[0] : 'Error';
	var b = arguments[2] ? arguments[2] : '确定';
	var c = arguments[1] ? arguments[1] : '';
	var d = ['<div class="js_dialog" id="iosDialog">', '   <div class="weui-mask"></div>', '   <div class="weui-dialog">', '       <div class="weui-dialog__bd"></div>', '       <div class="weui-dialog__ft">', '           <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default"></a>', '           <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary"></a>', '       </div>', '   </div>', '</div>'].join('');
	var e = ['<style>', '    .weui-mask{', '        position: fixed;', '        z-index: 1000;', '        top: 0;', '        right: 0;', '        left: 0;', '        bottom: 0;', '        background: rgba(0, 0, 0, 0.6);', '    }', '    .weui-dialog{', '        position: fixed;', '        z-index: 5000;', '        width: 80%;', '        max-width: 300px;', '        top: 50%;', '        left: 50%;', '        -webkit-transform: translate(-50%, -50%);', '                transform: translate(-50%, -50%);', '        background-color: #FFFFFF;', '        text-align: center;', '        border-radius: 3px;', '        overflow: hidden;', '    }', '    .weui-dialog__bd{', '        padding: 0 1.6em 0.8em;', '        min-height: 40px;', '        font-size: 15px;', '        line-height: 1.3;', '        word-wrap: break-word;', '        word-break: break-all;', '        color: #999999;', '    }', '    .weui-dialog__bd:first-child{', '        padding: 2.7em 20px 1.7em;', '        color: #353535;', '    }', '    .weui-dialog__ft{', '        position: relative;', '        line-height: 48px;', '        font-size: 18px;', '        display: -webkit-box;', '        display: -webkit-flex;', '        display: flex;', '    }', '    .weui-dialog__ft:after{', '        content: " ";', '        position: absolute;', '        left: 0;', '        top: 0;', '        right: 0;', '        height: 1px;', '        border-top: 1px solid #D5D5D6;', '        color: #D5D5D6;', '        -webkit-transform-origin: 0 0;', '                transform-origin: 0 0;', '        -webkit-transform: scaleY(0.5);', '                transform: scaleY(0.5);', '    }', '    .weui-dialog__btn{', '        display: block;', '        -webkit-box-flex: 1;', '        -webkit-flex: 1;', '                flex: 1;', '        color: #3CC51F;', '        text-decoration: none;', '        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);', '        position: relative;', '    }', '    .weui-dialog__btn:active{', '        background-color: #EEEEEE;', '    }', '    .weui-dialog__btn:after{', '        content: " ";', '        position: absolute;', '        left: 0;', '        top: 0;', '        width: 1px;', '        bottom: 0;', '        border-left: 1px solid #D5D5D6;', '        color: #D5D5D6;', '        -webkit-transform-origin: 0 0;', '                transform-origin: 0 0;', '        -webkit-transform: scaleX(0.5);', '                transform: scaleX(0.5);', '    }', '    .weui-dialog__btn:first-child:after{', '        display: none;', '    }', '    .weui-dialog__btn_default{', '        color: #353535;', '        display: none;', '    }', '    .weui-dialog__btn_primary{', '        color: #0BB20C;', '    }', '</style>'].join('');
	if ($('#iosDialog').length === 0) {
		$('body').append(e).append(d);
	}
	if (c === '') {
		$('.weui-dialog__btn_primary').off('click').on('click', function() {
			closeDialog();
		});
	} else {
		$('.weui-dialog__btn_primary').off('click').on('click', c);
	}
	$('#iosDialog').find('.weui-dialog__bd').html(a);
	$('#iosDialog').find('.weui-dialog__btn_primary').html(b);
	$('#iosDialog').show();
}

function closeDialog() {
	$('#iosDialog').hide();
}

function showLoadingToast() {
	var a = arguments[0] ? arguments[0] : "加载中";
	if ($('#loadingToast').length == 0) {
		var css = ['<style>', '    .weui-mask_transparent {', '        position: fixed;', '        z-index: 1000;', '        top: 0;', '        right: 0;', '        left: 0;', '        bottom: 0;', '    }', '    .weui-toast {', '        position: fixed;', '        z-index: 5000;', '        width: 7.6em;', '        min-height: 7.6em;', '        top: 180px;', '        left: 50%;', '        margin-left: -3.8em;', '        background: rgba(17, 17, 17, 0.7);', '        text-align: center;', '        border-radius: 5px;', '        color: #FFFFFF;', '     }', '    .weui-loading {', '        margin: 30px 0 0;', '        width: 38px;', '        height: 38px;', '        display: inline-block;', '        vertical-align: baseline;', '        -webkit-animation: weuiLoading 1s steps(12, end) infinite;', '        background:transparent url("data:image/svg+xml;charset=utf8, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'none\' d=\'M0 0h100v100H0z\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23E9E9E9\' rx=\'5\' ry=\'5\' transform=\'translate(0 -30)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23989697\' rx=\'5\' ry=\'5\' transform=\'rotate(30 105.98 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%239B999A\' rx=\'5\' ry=\'5\' transform=\'rotate(60 75.98 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23A3A1A2\' rx=\'5\' ry=\'5\' transform=\'rotate(90 65 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23ABA9AA\' rx=\'5\' ry=\'5\' transform=\'rotate(120 58.66 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23B2B2B2\' rx=\'5\' ry=\'5\' transform=\'rotate(150 54.02 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23BAB8B9\' rx=\'5\' ry=\'5\' transform=\'rotate(180 50 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23C2C0C1\' rx=\'5\' ry=\'5\' transform=\'rotate(-150 45.98 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23CBCBCB\' rx=\'5\' ry=\'5\' transform=\'rotate(-120 41.34 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23D2D2D2\' rx=\'5\' ry=\'5\' transform=\'rotate(-90 35 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23DADADA\' rx=\'5\' ry=\'5\' transform=\'rotate(-60 24.02 65)\'/%3E%3Crect width=\'7\' height=\'20\' x=\'46.5\' y=\'40\' fill=\'%23E2E2E2\' rx=\'5\' ry=\'5\' transform=\'rotate(-30 -5.98 65)\'/%3E%3C/svg%3E") no-repeat;', '        background-size: 100%;', '    }', '    @-webkit-keyframes weuiLoading{', '        0%{', '            -webkit-transform:rotate3d(0, 0, 1, 0deg);', '        }', '        100%{', '            -webkit-transform:rotate3d(0, 0, 1, 360deg);', '        }', '    }', '</style>'].join('');
		$('body').append(css).append('<div id="loadingToast"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content"></p></div></div>');
	}
	$('#loadingToast').show().find('.weui-toast__content').html(a);
}

function closeLoadingToast() {
	$('#loadingToast').hide();
}
/*showLoadingToast('查询中');
showDialog("提交成功", function() {
	closeDialog();
})*/