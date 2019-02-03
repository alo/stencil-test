import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'almeriajs-component',
  styleUrl: 'almeriajs-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello to {this.getText()}</div>;
  }
}
