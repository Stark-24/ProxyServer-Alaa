const CommentController = require("../../CommentSection/server/controller.js");
const FootPlayerController = require("../../FooterPlayer/server/controller.js");
const HeroPlayerController = require("../../HeroPlayer/server/controller.js");
const SideBarController = require("../../SideBar/server/controller.js");
const router = require("express").Router();

//Alaa's Routes
router
  .route("/comments")
  .get(CommentController.fetchAllComments)
  .post(CommentController.createOneComment)
  .delete(CommentController.eraseOneComment);
router.route("/replies").get(CommentController.fetchAllCommentReplies);
router.route("/users").get(CommentController.fetchAllUsers);

//Justin's Routes
router.route("/songs").get(FootPlayerController.fetch);
// .post(FootPlayerController.post)
// .delete(FootPlayerController.delete);

//Julie's Routes
router.route("/heroPlayer").get(HeroPlayerController.fetch);

//Rafaels Routes
router.route("/relatedTracks").get(SideBarController.relatedTracks.get);
router.route("/playlists").get(SideBarController.playlists.get);
router.route("/usersLiked").get(SideBarController.usersLiked.get);
router.route("/usersReposts").get(SideBarController.usersReposts.get);

module.exports = router;
