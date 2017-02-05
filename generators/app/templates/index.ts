
import {ImportedPackageExpression, TranspileOptions, IResult} from 'ceveral-compiler'
import {<%= className%>} from './visitor'

export default {
	name: '<%= name%>',
	
	transform(ast: ImportedPackageExpression, options:TranspileOptions): Promise<IResult[]> {
		let visitor = new <%= className %>(options);
		return Promise.resolve(visitor.parse(ast));
	}
}