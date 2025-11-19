import { writeToken } from "../env";
import { client } from "./client";

const mutationClient = client.withConfig({ token: writeToken });

export async function addFAQLike(docId: string, userId: string) {
    const draft = await mutationClient.getDocument(`drafts.${docId}`);

    await mutationClient
        .patch(docId)
        .setIfMissing({ likedUserList: [] })
        .append("likedUserList", [userId])
        .commit();

    if (draft) {
        await mutationClient
            .patch(draft._id)
            .setIfMissing({ likedUserList: [] })
            .append("likedUserList", [userId])
            .commit();
    }
}

export async function removeFAQLike(docId: string, userId: string) {
    const draft = await mutationClient.getDocument(`drafts.${docId}`);
    const doc = await client.getDocument(docId);
    const likes = doc?.userIdList || [];

    await mutationClient
        .patch(docId)
        .unset([`likedUserList[${likes.indexOf(userId)}]`])
        .commit();

    if (draft) {
        const likesInDraft = draft.userIdList || [];
        await mutationClient
            .patch(draft._id)
            .unset([`likedUserList[${likesInDraft.indexOf(userId)}]`])
            .commit();
    }
}
