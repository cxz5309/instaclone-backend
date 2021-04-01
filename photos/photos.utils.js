export const processHashtags = (caption) =>{
    console.log(caption)
    const hashtags_cut = caption.match(/#[\w]+/g||[]);
    console.log(hashtags_cut);
    if(hashtags_cut===null){
        return [];
    }
    return hashtags_cut.map(hashtag =>({
        where:{hashtag}, create:{hashtag}
    }));
}