import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmojis } from "../../utils/emojis";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS : ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conv, index) => (
        <Conversation
          key={conv._id}
          conversation={conv}
          emoji={getRandomEmojis()}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;
