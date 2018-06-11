import * as fromPrograms from '../actions/programs.action';
import { Program } from '../../models/program.model';

export interface ProgramState {
  entities: { [id: number]: Program };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProgramState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPrograms.ProgramsAction
): ProgramState {
  switch (action.type) {
    case fromPrograms.LOAD_PROGRAMS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPrograms.LOAD_PROGRAMS_SUCCESS: {
      const programs = action.payload;

      const entities = programs.reduce(
        (entitiesParam: { [id: number]: Program }, program: Program) => {
          return {
            ...entitiesParam,
            [program.id]: program,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromPrograms.LOAD_PROGRAMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getProgramsLoading = (state: ProgramState) => state.loading;
export const getProgramsLoaded = (state: ProgramState) => state.loaded;
export const getProgramsEntities = (state: ProgramState) => state.entities;
