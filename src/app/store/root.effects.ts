import { GeneralEffects } from './general/general.effects';
import { EffectsModule } from '@ngrx/effects';

export const RootEffects = EffectsModule.forRoot([GeneralEffects]);
