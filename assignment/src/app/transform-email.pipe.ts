import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformEmail',
  standalone:false
})
export class TransformEmailPipe implements PipeTransform {
  transform(email: string, searchTerm: string): string {
    if (!searchTerm || !email.toLowerCase().includes(searchTerm.toLowerCase())) {
      return email; // Return the original email if no match
    }
    const username = email.split('@')[0];
    const domain = email.split('@')[1];
    return username.toUpperCase() + domain.toUpperCase(); // Transform the email
  }
}
