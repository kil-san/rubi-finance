import 'styled-components';
import { IRubiTheme } from 'config/themes'

declare module "styled-components" {
  export interface DefaultTheme extends IRubiTheme {}
}
