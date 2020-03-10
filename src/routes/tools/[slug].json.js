const tools = {
	"instagrab": {
		"on": true,
		"full_name": "Instagram Graber",
		"description": "Download media from instagram post",
		"keyword": "instagram downloader,cara download foto/video di instagram, instagram to jpg, instagram, unduh gambar/video di instagram"
	},
	"tokotalk": {
		"on": true,
		"full_name": "Spam OTP Tokotalk",
		"description": "Tool prank untuk mengusili teman keluarga atau yang lainnya",
		"keyword": "tokotalk spam, tool prank sms, spam sms unlimited, spam sms gratis, cara jahilin teman"
	},
	"oyo": {
		"on": true,
		"full_name": "Spam OTP OYO",
		"description": "Tool prank untuk mengusili teman keluarga atau yang lainnya",
		"keyword": "oyo spam, tool prank sms, spam sms unlimited, spam sms gratis, cara jahilin teman, masterkadal, masterkadal.com"
	},
	"chataja": {
		"on": true,
		"full_name": "Spam OTP ChatAja",
		"description": "Tool prank untuk mengusili teman keluarga atau yang lainnya",
		"keyword": "chataja spam, oyo spam, tool prank sms, spam sms unlimited, spam sms gratis, cara jahilin teman, masterkadal, masterkadal.com, prank masterkadal"
	},
}

export function get(req, res, next) {
	const { slug } = req.params;

	if (tools[slug] != undefined) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(tools[slug]));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}