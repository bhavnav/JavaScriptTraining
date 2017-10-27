function getMiddle(s)
		{
			var result;
			var len = s.length / 2;

			if(s.length % 2 == 0)
			{
				console.log(s.length % 2)
				result = s.substr(len - 1, 2);
			}
			else
			{
				result = s.charAt(s.length / 2);
			}
			return result;
		}