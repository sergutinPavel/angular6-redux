import { GeneralEffects } from './general.effects';
import { EffectsModule } from '@ngrx/effects';

export const RootEffects = EffectsModule.forRoot([GeneralEffects]);
