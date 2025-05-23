export interface Challenge {
        challenge_id: number;
        title: string;
        content: string;
        goal_amount: string;
        goal_days: number;
        point: number;
        start_date: string;
        end_date: string;
        category: number;
        category_name: string;
        is_active: Boolean;
        computed_status: string;
}

export interface UserChallenge {
  user_challenge_id: number;
  user_id: number;
  challenge_id: number;
  title: string;
  status: string;
  target_expense: string;
  previous_expense: string;
  total_expense: string;
  progress: string;
}

export interface ChallengeDetail extends Challenge {
  content: string;
  // point: number
  // goal: string
  // howToParticipate: string
}

// 전체 챌린지 조회
// "challenges": [
//     {
//         "challenge_id": 20,
//         "title": "[여가] 한 달 소비 줄이기 - 20만원",
//         "content": "여가 지출을 한 달 동안 200,000원 이하로 줄이기",
//         "goal_amount": "200000.00",
//         "goal_days": 28,
//         "point": 1000,
//         "start_date": "2025-06-07T09:03:57.215385+09:00",
//         "end_date": "2025-09-04T09:03:57.215385+09:00",
//         "category": 9,
//         "category_name": "여가",
//         "is_active": true,
//         "computed_status": "예정"
//     },
// "total_count": 20,
// "pagination": {
//     "current_page": 1,
//     "page_size": 10,
//     "total_pages": 2,
//     "has_next": true,
//     "has_previous": false
// }


