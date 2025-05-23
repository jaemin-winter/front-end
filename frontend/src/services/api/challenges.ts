import apiClient from '@/plugins/axios'
import type { Challenge, UserChallenge, ChallengeDetail } from "@/types/challenges"

export const challengesService = {
  // 전체 챌린지 목록
  fetchChallengeList: async (size: number): Promise<Challenge[]> => {
    const params = { size: size}
    const response = await apiClient.get('/challenges/', {
      params: params
    })
    return response.data
  },

  // 사용자 개인 챌린지
  fetchPersonalChallenges: async (type?: number) => {
    const params = {
      type: type,
    }
    const response = await apiClient.get('/challenges/personal/', {
      params: params
    })
    // return response.data.data as UserChallenge[]
    return response.data
  },

  // 챌린지 상세 정보
  fetchChallengeDetail: async (id: number) => {
    const response = await apiClient.get(`/challenges/${id}/`)
    // return response.data.data as ChallengeDetail
    return response.data
  }
}

export default challengesService
