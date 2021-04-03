export default gql`
    type MutationP
    sendMessage(payload: String!, roomId: Int, userId: Int): MutationRespons!
`;

