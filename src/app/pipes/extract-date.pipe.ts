import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "extractDate"
})
export class ExtractDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.split(" ")[0];
  }
}
