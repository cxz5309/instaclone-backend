export const processHashtags = (caption) =>{
    console.log(caption)
    const hashtags_cut = caption.match(/#[\w]+/g||[]);
    return hashtags_cut.map(hashtag =>({
        where:{hashtag}, create:{hashtag}
    }));
}