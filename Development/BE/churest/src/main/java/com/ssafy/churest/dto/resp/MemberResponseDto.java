package com.ssafy.churest.dto.resp;

import com.ssafy.churest.entity.Member;
import lombok.Builder;
import lombok.Data;

public class MemberResponseDto {
    @Data
    @Builder
    public static class LittleInfo {
        private int memberId;
        private String nickname;
        private int avatarId;
        public static LittleInfo fromEntity(Member member) {
            return LittleInfo.builder()
                    .memberId(member.getMemberId())
                    .nickname(member.getNickname())
                    .avatarId(member.getAvatarId())
                    .build();
        }
    }
}
