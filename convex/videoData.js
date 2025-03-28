import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createVideoData = mutation({
    args: {
        title: v.string(),
        topic: v.string(),
        script: v.string(),
        videoStyle: v.string(),
        caption: v.any(),
        voice: v.string(),
        uid: v.id('users'),
        createdBy: v.string(),
        credits: v.number()
    },
    handler: async(ctx, args) => {
        const result = await ctx.db.insert('videoData', {
            title: args.title,
            topic: args.topic,
            script: args.script,
            videoStyle: args.videoStyle,
            caption: args.caption,
            voice: args.voice,
            uid: args.voice,
            createdBy: args.createdBy,
            status: 'Pending'
        })
        await ctx.db.patch(args.uid, {
            credits: (args?.credits) - 1
        })
        return result;
    }
})

export const UpdateVideoRecord = mutation({
    args: {
        recordId: v.id('videoData'),
        audioUrl: v.string(),
        images: v.string(),
        captionJson: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args.recordId, {
            audioUrl: args.audioUrl,
            captionJson: args.captionJson,
            images: args.images,
            status: 'Completed'
        })
        return result;
    }
})