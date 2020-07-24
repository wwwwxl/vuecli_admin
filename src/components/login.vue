<template>
	<div class="login_box">
		<div class="img_tit">
			<div class="img"></div>
			<div class="tit">系统</div>
		</div>
		<div class="form_el">
			<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
				<el-form-item prop="loginName">
					<el-input minlength="6" maxlength="20" placeholder="请输入6~20位的用户名" v-model="loginForm.loginName" prefix-icon="el-icon-user" autocomplete="off">
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input maxlength="20" placeholder="请输入最多20位的密码" v-model="loginForm.password" prefix-icon="el-icon-lock" autocomplete="off" show-password>
					</el-input>
				</el-form-item>
				<div class="item-code">
					<el-form-item class="yanzhengma" prop="yanzhengma">
						<el-input maxlength="6" placeholder="请输入验证码" v-model="loginForm.yanzhengma" prefix-icon="el-icon-edit-outline" autocomplete="off">
						</el-input>
					</el-form-item>
					<el-form-item>
						<canvas width="120" height="40" id="login_code"></canvas>
					</el-form-item>
				</div>
				<el-form-item class="change">
					<span @click="changeCode">看不清，换一张</span>
				</el-form-item>
				<el-button type="primary" size="primary" @click="submit('loginForm')" class="login-botton">登录</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {
		special
	} from '../utils/util.js'
	export default {
		data() {
			//验证账号
			let checkLoginName = (rule, value, callback) => {
				if (!value) {
					callback(new Error('用户名不能为空'));
				} else if (!special(value)) {
					callback(new Error("只能含有字母和数字，请重新输入"))
				} else {
					callback();
				}
			};
			//验证密码
			let checkPassword = (rule, value, callback) => {
				if (!value) {
					callback(new Error('密码不能为空'));
				} else if (!special(value)) {
					callback(new Error("只能含有字母和数字，请重新输入"))
				} else {
					callback();
				}
			};
			let checkYanzhengma=(rule, value, callback) => {
				if (!value) {
					callback(new Error('验证码不能为空'));
				} else if (value!=this.keepSave&&value.toUpperCase()!=this.keepSave) {
					callback(new Error("验证不正确，请重新输入"))
				} else {
					callback();
				}
			};
			return {
				loginForm: {
					loginName: "",
					password: "",
					yanzhengma: ""
				},
				keepSave:"",
				rules: {
					loginName: [{
						validator: checkLoginName,
						trigger: 'blur'
					}, ],
					password: [{
						validator: checkPassword,
						trigger: 'blur'
					}, ],
					yanzhengma: [{
						validator: checkYanzhengma,
						trigger: 'blur'
					}, ],
				},
				
			}
		},
		mounted() {
			this.combine();
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valid) => {
					//console.log('valid',valid);
					if (valid) {
						console.log("登录");
						this.getAxios("/userinfo",{
						}).then((res)=>{
							console.log("success",res);
							sessionStorage.setItem('islogin', 1);
							this.$router.push({ path: '/home' });
						}).catch((res)=>{
							console.log("error",res);
						});
					} else {
						return false;
					}
				});
			},
			//看不清，换一张
			changeCode() {
				this.combine();
			},
			//验证码函数
			combine() {
				//产生背景色,填充矩形
				var w = 120;
				var h = 40;
				var ctx = document.getElementById('login_code').getContext("2d"); //返回一个对象
				ctx.fillStyle = this.randomColor(180, 230); //返回填充绘画的颜色值
				ctx.fillRect(0, 0, w, h); //绘画矩形
				//产生4位随机数
				var pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
				this.keepSave="";
				for (var i = 0; i < 4; i++) {
					var c = pool[this.randomMath(0, pool.length)]; //随机的字
					this.keepSave += c.toString();
					var fs = this.randomMath(18, 40); //字体的大小
					var deg = this.randomMath(-30, 30); //字体的旋转角度
					ctx.font = fs + 'px Simhei'; //文本内容的当前字体属性
					ctx.textBaseline = "top"; //绘制文本时使用的当前文本基线
					ctx.fillStyle = this.randomColor(80, 150);
					ctx.save(); //保存当前环境的状态。
					ctx.translate(30 * i + 15, 20); //重新映射画布上的 (15,15) 位置。
					ctx.rotate(deg * Math.PI / w); //旋转当前绘图。
					ctx.fillText(c, -10, -15); //绘制"被填充的"文本
					ctx.restore(); //返回之前保存过的路径状态和属性。
				}
				//产生5条干扰线,干扰线的颜色要浅一点
				for (var j = 0; j < 5; j++) {
					ctx.beginPath(); //起始一条路径，或重置当前路径。
					ctx.moveTo(this.randomMath(0, w), this.randomMath(0, h)); //路径移动到画布中的指定点，不创建线条
					ctx.lineTo(this.randomMath(0, w), this.randomMath(0, h)); //添加一个新点，然后在画布中创建从该点到最后指定点的线条。
					ctx.strokeStyle = this.randomColor(120, 230); //设置或返回用于笔触的颜色、渐变或模式。
					ctx.closePath(); //创建从当前点回到起始点的路径。
					ctx.stroke(); //绘制已定义的路径。
				}
				//随机产生100个干扰的小点
				for (var k = 0; k < 100; k++) {
					ctx.beginPath();
					ctx.arc(this.randomMath(0, w), this.randomMath(0, h), 1, 0, 2 * Math.PI); //创建弧/曲线（用于创建圆形或部分圆）。
					ctx.closePath();
					ctx.fillStyle = this.randomColor(150, 200);
					ctx.fill(); //填充当前绘图（路径）
				}
			},
			//产生随机颜色
			randomColor(min, max) {
				var r = this.randomMath(min, max);
				var g = this.randomMath(min, max);
				var b = this.randomMath(min, max);
				return `rgb(${r},${g},${b})`; //返回rgb颜色
			},
			//产生随机整数min<=random<max
			randomMath(min, max) {
				return parseInt(Math.random() * (max - min) + min);
			}


		}
	}
</script>

<style lang="scss" scoped>
	@keyframes myfirst {
		0% {
			background-image: radial-gradient(#64b9f9 5%, #42a9f8 15%, #1997f8 60%);
		}

		25% {
			background-image: radial-gradient(#64b9f9 15%, #42a9f8 25%, #1997f8 70%);
		}

		50% {
			background-image: radial-gradient(#64b9f9 30%, #42a9f8 40%, #1997f8 70%);
		}

		75% {
			background-image: radial-gradient(#64b9f9 40%, #42a9f8 50%, #1997f8 70%);
		}

		100% {
			background-image: radial-gradient(#2c8ed9 40%, #1785d9 50%, #1673ba 70%);
		}
	}

	@-webkit-keyframes myfirst

	/* Safari 与 Chrome */
		{
		0% {
			background-image: radial-gradient(#64b9f9 5%, #42a9f8 15%, #1997f8 60%);
		}

		25% {
			background-image: radial-gradient(#64b9f9 15%, #42a9f8 25%, #1997f8 70%);
		}

		50% {
			background-image: radial-gradient(#64b9f9 30%, #42a9f8 40%, #1997f8 70%);
		}

		75% {
			background-image: radial-gradient(#64b9f9 40%, #42a9f8 50%, #1997f8 70%);
		}

		100% {
			background-image: radial-gradient(#2c8ed9 40%, #1785d9 50%, #1673ba 70%);
		}
	}

	.login_box {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		background-color: $primary-color;
		background-image: radial-gradient(#64b9f9 30%, #42a9f8 40%, #1997f8 70%);
		// animation: myfirst 5s linear 2s infinite alternate;
		// -moz-animation: myfirst 5s linear 2s infinite alternate;
		// /* Firefox */
		// -webkit-animation: myfirst 5s linear 2s infinite alternate;
		// /* Safari and Chrome */
		// -o-animation: myfirst 5s linear 2s infinite alternate;

		/* Opera */
		.img_tit {
			display: flex;
			flex-direction: row;
			justify-content: center;
			height: auto;
			width: 25rem;
			margin: 0 auto;
			margin-top: 16rem;

			.img {
				background-image: url(../assets/bblogo.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				width: 5rem;
				height: 5rem;
			}

			.tit {
				width: auto;
				line-height: 5rem;
				font-size: 1.5rem;
				font-weight: bold;
				color: $info-color;
			}
		}

		.form_el {
			position: relative;
			height: auto;
			width: 25rem;
			margin: 0 auto;

			.item-code {
				display: flex;
				flex-direction: row;

				.yanzhengma {
					width: calc(100% - 120px);
				}
			}

			.login-botton {
				width: 100%;
				border-radius: 10px;
				background-color: #E6A23C;
			}

		}

		.change {
			text-align: right;

			span {
				cursor: pointer;
			}
		}
	}
</style>
