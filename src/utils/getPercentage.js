export const getPercentage = (teamHomeVotes, teamAwayVotes) => {
    let votes = teamHomeVotes + teamAwayVotes;
    if (votes === 0) {
        return 50
    }else {
        return Math.floor(100 * teamHomeVotes / votes)
    }
}
export const getPercentageTeamAway = (teamHomeVotes, teamAwayVotes) => {
    let teamHomePercentage = getPercentage(teamHomeVotes, teamAwayVotes)
    return 100 -teamHomePercentage
}