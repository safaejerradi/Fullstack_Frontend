import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayCategories'
})
export class DisplayCategoriesPipe implements PipeTransform {
    transform(categories: any[], args?: any): string {
        return categories.map(category => category.name).join(', ');
    }
}