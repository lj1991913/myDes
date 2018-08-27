

function Calendar(opts){
	this.input = opts.input || '';
	this.priceList = opts.priceList || [];
	this.m_day = '';
	this.firstDay = ''; //第一天星期几
	this.year = '';
	this.month = '';
	this.day = '';
	this.list = '';
}

Calendar.prototype = {
	init : function(){
		var d = new Date(),y;
		y=d.getFullYear();
		this.m_day = new Array(31,28+this.is_leap(y),31,30,31,30,31,31,30,31,30,31);
		this.firstDay = d.getDay();
		this.day = d.getDate();
		this.year = y;
		this.month = d.getMonth()+1;
		this.list=Math.ceil((this.m_day[this.month-1] + this.firstDay)/7);
		if(this.month<10){
			this.month = '0' + this.month;
		}
		$('#today').text(this.year+'年' + this.month +'月');
		this.randerHtml();

	},
	randerHtml : function(){
		var idx,date_str;
		for(i=0;i<6;i++) { //表格的行
		　　for(k=0;k<7;k++) { //表格每行的单元格
		　　　　idx=i*7+k; //单元格自然序列号
		　　　　date_str=idx-this.firstDay+1; //计算日期
				var str ;
				if(date_str<=0){
					if(this.month>1){
						date_str = this.m_day[parseInt(this.month)] + date_str;
					}else{
						date_str = '';
					}
					str = '<div class="calendar-bot-item hui"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
				}else if(date_str>this.m_day[parseInt(this.month-1)]){
					if(this.month != 12){
						date_str =date_str - this.m_day[parseInt(this.month-1)] + 1 ;
					}else{
						date_str = '';
					}
					str = '<div class="calendar-bot-item hui"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
				}else{
					date_str=idx-this.firstDay+1;
					var d = date_str;
					if(d<10){
						d='0'+d;
					}
					if(date_str<this.day){
						str = '<div class="calendar-bot-item huise" date="'+this.year+'-'+this.month+'-'+d+'"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
					}else{
						str = '<div class="calendar-bot-item select-calendar" date="'+this.year+'-'+this.month+'-'+d+'"><span class="days">'+date_str+'</span><span class="rest">休</span><span class="price">￥300</span></div>';
					}
				}
				
				$('#rl').append(str);
		　　}
		}
	},
	is_leap : function(year){
		var res;
		return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
	}
};

module.exports = Calendar;