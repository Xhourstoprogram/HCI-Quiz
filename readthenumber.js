var one = [ "", "one ", "two ", "three ", "four ",
				"five ", "six ", "seven ", "eight ",
					"nine ", "ten ", "eleven ", "twelve ",
					"thirteen ", "fourteen ", "fifteen ",
					"sixteen ", "seventeen ", "eighteen ",
					"nineteen " ];

	
	var ten = [ "", "", "twenty ", "thirty ", "forty ",
			"fifty ", "sixty ", "seventy ", "eighty ",
						"ninety " ];

	
	function numToWords(n, s)
	{
		var str = "";
		if (n > 19) {
			str += ten[parseInt(n / 10)] + one[n % 10];
		}
		else {
			str += one[n];
		}

		if (n != 0) {
			str += s;
		}

		return str;
	}

	
	function convertToWords(n)
	{
		
		var out = "";


		out += numToWords(parseInt((n / 100) % 10),
		"hundred ");

		if (n > 100 && n % 100 > 0) {
			out += "and ";
		}

		out += numToWords(parseInt(n % 100), "");

		return out;
	}
	var n = 955;
