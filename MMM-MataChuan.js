/* Magic Mirror
 * Module: MMM-MataChuan
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-MataChuan",{

	defaults: {
			height:"960",
			width:"720",
	},

	getStyles: function() {
        return ["MMM-MataChuan.css"];
    },

	getDom: function() {


        var picture = document.createElement("img");
        picture.classList.add('gray')
		picture.id = "MataChuan";
        picture.width = this.config.width;
		picture.height = this.config.height;

        picture.src= this.data.path + "SXC.jpg";

		return picture;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_MataChuan') {
            this.hide(1000);
        }  else if (notification === 'SHOW_MataChuan') {
            this.show(1000);
        }

    },

});