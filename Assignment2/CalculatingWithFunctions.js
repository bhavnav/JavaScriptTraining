function computeResult(num, expression)
		{
			return expression == undefined ? num : expression(num);
		}
		function zero(val)
		{
			return computeResult(0, val);
		}
		function one(val)
		{
			return computeResult(1, val);
		}
		function two(val)
		{
			return computeResult(2, val);
		}
		function three(val)
		{
			return computeResult(3, val);
		}
		function four(val)
		{
			return computeResult(4, val);
		}
		function five(val)
		{
			return computeResult(5, val);
		}
		function six(val)
		{
			return computeResult(6, val);
		}
		function seven(val)
		{
			return computeResult(7, val);
		}
		function eight(val)
		{
			return computeResult(8, val);
		}
		function nine(val)
		{
			return computeResult(9, val);
		}
		function plus(operandTwo)
		{
			return function(operandOne) {
				return operandOne + operandTwo;
			};
		}
		function minus(operandTwo)
		{
			return function(operandOne) {
				return operandOne - operandTwo;
			};
		}
		function times(operandTwo)
		{
			return function(operandOne) {
				return operandOne * operandTwo;
			};
		}
		function dividedBy(operandTwo)
		{
			return function(operandOne) {
				return operandOne / operandTwo;
			};
		}