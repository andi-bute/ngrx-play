import * as fromPrograms from '../actions/programs.action';
import { Program } from '../../models/program.model';

export interface ProgramState {
  data: Program[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProgramState = {
  data: [],
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
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
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
export const getPrograms = (state: ProgramState) => state.data;
