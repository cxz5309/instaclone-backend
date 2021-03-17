export const processHashtags = (caption) =>{
    ///parse caption
    hashtags = caption.match(/#[\w]+/g);
    return hashtags.map(hashtag =>({
        where:{hashtag}, create:{hashtag}
    }));
}