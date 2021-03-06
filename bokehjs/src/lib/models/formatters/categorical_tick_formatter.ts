import {TickFormatter} from "./tick_formatter"
import {AxisView} from "../axes/axis"
import {copy} from "core/util/array"
import * as p from "core/properties"

export namespace CategoricalTickFormatter {
  export type Attrs = p.AttrsOf<Props>

  export type Props = TickFormatter.Props
}

export interface CategoricalTickFormatter extends CategoricalTickFormatter.Attrs {}

export class CategoricalTickFormatter extends TickFormatter {
  properties: CategoricalTickFormatter.Props

  constructor(attrs?: Partial<CategoricalTickFormatter.Attrs>) {
    super(attrs)
  }

  static initClass(): void {
    this.prototype.type = 'CategoricalTickFormatter'
  }

  doFormat(ticks: string[], _axis_view: AxisView): string[] {
    return copy(ticks)
  }
}
CategoricalTickFormatter.initClass()
