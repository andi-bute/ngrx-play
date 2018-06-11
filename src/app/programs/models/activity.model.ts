import * as moment from 'moment';

export interface Activity {
  url: string;
  id: number;
  products: string[];
  contact: any;
  actual_start_date: string;
  actual_end_date: string;
  actual_duration: string;
  actual_cost: number;
  address: string;
  capacity_built: string;
  description: string;
  description_of_community_involvement: string;
  description_of_government_involvement: string;
  expected_end_date: string;
  expected_start_date: string;
  issues_and_challenges: string;
  justification_background: string;
  lessons_learned: string;
  level2_uuid: string;
  name: string;
  notes: string;
  parent_workflowlevel2: number;
  quality_assured: string;
  risks_assumptions: string;
  short_name: string;
  site_instructions: string;
  total_cost: number;
  total_estimated_budget: number;
  type: string;
  effect_or_impact: string;
  create_date: string;
  edit_date: string;
  status: string;
  progress: string;
  donor_currency: string;
  local_currency: string;
  milestone: string;
  office: string;
  sector: string;
  staff_responsible: string;
  workflowlevel1: string;
  created_by: string;
  approval: string[];
  indicators: string[];
  site: string[];
  stakeholder: string[];
  sub_sector: string[];
}

export function activityDateTransform(payload: Activity) {
  const actual_start_date = payload.actual_start_date ? moment(payload.actual_start_date).unix().toString() : '';
  const actual_end_date = payload.actual_end_date ? moment(payload.actual_end_date).unix().toString() : '';
  const create_date = payload.create_date ? moment(payload.create_date).unix().toString() : '';
  const edit_date = payload.edit_date ? moment(payload.edit_date).unix().toString() : '';
  const expected_start_date = payload.expected_start_date ? moment(payload.expected_start_date).unix().toString() : '';
  const expected_end_date = payload.expected_end_date ? moment(payload.expected_end_date).unix().toString() : '';
  return <Activity>{
    ...payload,
    actual_start_date: actual_start_date,
    actual_end_date: actual_end_date,
    create_date: create_date,
    edit_date: edit_date,
    expected_start_date: expected_start_date,
    expected_end_date: expected_end_date
  };
}
