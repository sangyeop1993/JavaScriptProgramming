var result1 = 0;
old_num = 0;
common_num = 0;
is_plus = true;
is_muti = false;
is_mins = false;
is_dvid = false;

function sc_common() {
	screen = $(".screen");
	screen.empty();
	screen.html(common_num);
}
function done() {
	if(is_plus) old_num = old_num+common_num;
	else if(is_muti) old_num = old_num*common_num;
	else if(is_mins) old_num = old_num-common_num;
	else if(is_dvid) old_num = old_num/common_num;
	
	is_plus = false;
	is_muti = false;
	is_mins = false;
	is_dvid = false;
	
	screen.empty();
	screen.html(old_num);
}
function result(){
	done();
	screen.empty();
	screen.html(old_num);
}
function n(n) {
	common_num = common_num*10+n;
	sc_common();
}
function del() {
	common_num = Math.floor(common_num/10);
	sc_common();
}
function plus() {
	done();
	is_plus = true;
	common_num = 0;
}
function multi() {
	done();
	is_muti = true;
	common_num = 0;
}
function minus() {
	done();
	is_mins = true;
	common_num = 0;
}
function devide() {
	done();
	is_dvid = true;
	common_num = 0;
}