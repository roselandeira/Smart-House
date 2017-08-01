(function(){

	var settings = {
		channel: 'pi-house',
		publish_key: 'pub-c-0b81eace-09f9-4c68-bb03-588545bab8b6',
		subscribe_key: 'sub-c-c543c0aa-73bb-11e7-8293-02ee2ddab7fe'
	};

	var pubnub = PUBNUB(settings);

	var temperature = $('#temperature');
	var rain = $('#rain');
	var smoke = $('#smoke');
	var gas = $('#gas');
	var extLight = $('#extLight');

	// var door = document.getElementById('door');
	// var lightLiving = document.getElementById('lightLiving');
	// var lightPorch = document.getElementById('lightPorch');
	// var fireplace = document.getElementById('fireplace');

	pubnub.subscribe({
		channel: settings.channel,
		callback: function(m) {
			if(m.temperature != undefined) {
				if(m.temperature < 10)
					var t = 0;
				else if(m.temperature < 20)
					var t = 1;
				else if(m.temperature < 30)
					var t = 2;
				else if(m.temperature < 40)
					var t = 3;
				else
					var t = 4;
				temperature.addClass('t-' + t);
				temperature.find('.status').html(m.temperature);
			}
			if(m.rain != undefined) {
				rain.addClass('r-' + m.rain);
				rain.find('.status').html(m.rain);
			}
			if(m.smoke != undefined) {
				smoke.addClass('s-' + m.smoke);
				smoke.find('.status').html(m.smoke);
			}
			if(m.gas != undefined) {
				gas.addClass('g-' + m.gas);
				gas.find('.status').html(m.gas);
			}
			if(m.extLight != undefined) {
				extLight.addClass('el-' + m.extLight);
				extLight.find('.status').html(m.extLight);
			}
		}
	})
})();
