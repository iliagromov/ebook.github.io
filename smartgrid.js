module.exports = {
	columns: 12,
	offset: "20px",
	//mobileFirst: true,
	container: {
        maxWidth: "940px",
        fields: "60px"
    },
	breakPoints: {
		md: {
            width: "1024px"
        },
        sm: {
            width: "992px"
        },
        ssm: {
            width: "768px"
        },
        xs: {
            width: "576px",
            offset: "10px",
            fields: "20px"
        },
        xxs: {
            width: "360px",
            /*
            offset: "10px",
            fields: "5px"
            */
        }
	},
    //detailedCalc: true
};