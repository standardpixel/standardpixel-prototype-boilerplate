var colors     = require('colors'),
	keys       = require(__dirname + '/keys.json'),
	sdb        = require(__dirname + '/simpledb_client.js').client,
    sys        = require('util'),
	record_key = process.argv[2],
	record_val = process.argv[3]

console.log('\033[2J');
console.log('Create record'.bold.underline);

console.log('record', record_key, record_val);

sdb.select('select $ItemName,created_at from twitter_favs where created_at is not null order by created_at desc limit 1', function(error,response) {
	
	/*
	if(error) {
		console.error(error);
	} else {
		for(var i=0, l=favs.length;l>i;i++) {
					
			if(response.length < 1 || (new Date(favs[i].created_at).getTime() > response[0].created_at)) {
				if(favs[i] && favs[i].id_str) {
					sdb.getItem('twitter_favs', favs[i].id_str, {sp_iteration:i}, function(error, data, meta) {
						var iteration = meta.query.sp_iteration;

						if(error) {
							console.log(('AWS Request Error ' + error.Message).red, error.Message);
						} else {
							if(data) {
								too_new_message++;
							} else {
								sdb.putItem('twitter_favs',favs[iteration].id_str,{
									text                         : favs[iteration].text,
									screen_name                  : favs[iteration].user.screen_name,
									profile_image_url            : favs[iteration].user.profile_image_url,
									profile_background_image_url : favs[iteration].user.profile_background_image_url,
									created_at                   : new Date(favs[iteration].created_at).getTime(),
									entities                     : favs[iteration].entities.urls
								},function(error,data) {
									if(error) {
										console.log(('AWS Response Error ' + error.Message).red, error.Message, '(' + favs[iteration].id + '/' + favs[iteration].user.screen_name + ')');
									} else {
										console.log(('Added a tweet from ' + favs[iteration].user.screen_name).green);
									}
								});
							}
						}
					});
				}
			} else {
				too_new_message++;
			}
					
			//
			// Messages
			//
			if(i === favs.length-1) {
				if(too_new_message) {
					console.log(('Skipping ' +too_new_message+ ' tweets because they are older than the last stored tweet').blue);
				}
			}
					
		}
	}
	*/
});
