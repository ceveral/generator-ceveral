
import {
    Token, Type, BaseVisitor, IResult, TranspileOptions, RecordTypeExpression,
     PackageExpression, RecordExpression,
    AnnotationExpression, PropertyExpression, TypeExpression, ImportTypeExpression,
    RepeatedTypeExpression, MapTypeExpression, OptionalTypeExpression,
    StringEnumExpression, StringEnumMemberExpression, NumericEnumExpression, NumericEnumMemberExpression,
    ExpressionPosition, AnnotatedExpression, ServiceExpression, MethodExpression, AnonymousRecordExpression
} from 'ceveral-compiler';



export class <%= className %> extends BaseVisitor {
    constructor(public options: TranspileOptions) {
        super();
    }

    parse(expression: PackageExpression): IResult[] {
        let out: string[] = this.visit(expression);
        
        
    }

    

    visitPackage(expression: PackageExpression): any {

        
    }

    visitRecord(expression: RecordExpression): any {

        

    }
    visitProperty(expression: PropertyExpression): any {

        
    }

    visitiRecordType(expression: RecordTypeExpression) {
       
    }

    visitType(expression: TypeExpression): any {
        
    }

    visitImportType(expression: ImportTypeExpression): any {
        
    }

    visitOptionalType(expression: OptionalTypeExpression): any {
    
    }

    visitRepeatedType(expression: RepeatedTypeExpression): any {
        
    }

    visitMapType(expression: MapTypeExpression): any {
        
    }

    visitAnnotation(expression: AnnotationExpression): any {
        
    }

    visitNumericEnum(expression: NumericEnumExpression): any {
        
    }

    visitNumericEnumMember(expression: NumericEnumMemberExpression): any {
    
    }
    visitStringEnum(expression: StringEnumExpression): any {
        
    }
    visitStringEnumMember(expression: StringEnumMemberExpression): any {
        
    }


    visitService(_: ServiceExpression): any {

    }

    visitMethod(_: MethodExpression): any {

    }

    visitAnonymousRecord(_: AnonymousRecordExpression): any {

    }

}
