import { narration, newLabel } from "@drincs/pixi-vn";
import { james, mc, sly, steph } from "../values/characters";

const startLabel = newLabel("start", [
    () => narration.dialogue = { character: james, text: "You're my roommate's replacement, huh?" },
    () => narration.dialogue = { character: james, text: "Don't worry, you don't have much to live up to. Just don't use heroin like the last guy, and you' fine!" },
    () => narration.dialogue = { character: mc, text: "..." },
    () => { narration.dialogue = "He thrusts out his hand." },
    () => narration.dialogue = { character: james, text: "James!" },
    () => narration.dialogue = { character: mc, text: "...Peter." },
    () => { narration.dialogue = "I take his hand and shake." },
    () => narration.dialogue = { character: james, text: "Ooh, Peter! Nice, firm handshake! The last quy always gave me the dead fish. I already think we'r gonna get along fine." },
    () => narration.dialogue = { character: james, text: "Come on in and..." },
    () => narration.dialogue = { character: james, text: "..." },
    () => narration.dialogue = { character: james, text: "I know you're both watching, come on out already!" },
    () => narration.dialogue = { character: james, text: "I just wanted to see what the new guy was like. Hey, you, Peter- be nice to our little brother, or you'll have to deal with *us*." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: james, text: "Peter, this is Sly. Yes, that is her real name." },
    () => { narration.dialogue = "I put out my hand." },
    () => narration.dialogue = { character: james, text: "I'm not shakin' your hand until I decide you're an all-right dude. Sorry, policy." },
    () => narration.dialogue = { character: mc, text: "Fair enough, I'm a pretty scary guy, or so l've been told." },
    () => narration.dialogue = { character: james, text: "The redhead behind her is Stephanie." },
    () => narration.dialogue = { character: steph, text: "Hey! Everyone calls me Steph. I'll shake your hand." },
    () => { narration.dialogue = "She puts out her hand, and I take it." },
    () => narration.dialogue = { character: mc, text: "Thanks, good to meet you, Stephanie." },
    () => narration.dialogue = { character: steph, text: "WOW, that is, like, the most perfect handshake I've ever had! Firm, but also gentle. Sly, you *gotta* shake his hand!" },
    () => narration.dialogue = { character: sly, text: "It's just a handshake..." },
    () => narration.dialogue = { character: steph, text: "Then just give it to him!" },
    () => narration.dialogue = { character: james, text: "Don't worry, Peter, she's just giving you the run-down. She's kinda like a father... I mean a mother... to us." },
    () => { narration.dialogue = "Sly thrusts her hand out to shake mine." },
    () => narration.dialogue = { character: sly, text: "Like a father?!?!" },
    () => { narration.dialogue = "I'm afraid to take her hand when she's mad, but I do." },
    () => narration.dialogue = { character: sly, text: "Wow, that was a good handshake..." },
    () => narration.dialogue = { character: james, text: "Well, I mean, you are *kinda* acting like a father. Like, I can totally see it: I'm the daughter, and you as my father, you want to make sure I'm going out with the right guy... or something..." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: steph, text: "...BWAHA HA!! JAMES!!!! WHAAAAT?????? YOU'RE SO AWKWARD!!!!" },
    () => narration.dialogue = { character: mc, text: "O-*kay*, I'm gonna go get settled in-" },
    () => narration.dialogue = { character: steph, text: "Wait! I've got a gift for you!" },
    () => narration.dialogue = { character: mc, text: "...?" },
    () => narration.dialogue = { character: sly, text: "It's food." },
    () => narration.dialogue = { character: steph, text: "Sly! SPOILERS!!!!" },
    () => { narration.dialogue = "Stephanie goes through the opposite door, and returns with a HUGE tinfoil-covered platter." },
    () => narration.dialogue = { character: james, text: "Looks like you baked way too much again." },
    () => narration.dialogue = { character: steph, text: "He doesn't have to know that!!!" },
    () => narration.dialogue = { character: mc, text: "...thanks... um..." },
    () => narration.dialogue = { character: steph, text: "Oh! You gotta take in your luggage!" },
    async (props) => await narration.callLabel(secondPart, props),
]);
export default startLabel;

const secondPart = newLabel("second_part", [
    () => { narration.dialogue = "She enters my my room before I'VE even had a chance to. \n\n...I could've just come back and gotten the platter later..." },
    () => { narration.dialogue = "She sets it on a desk. I throw my two paper bags down beside the empty bed." },
    () => narration.dialogue = { character: steph, text: "They got you a new mattress, right? That last guy was a druggie, did James tell tell you that?" },
    () => narration.dialogue = { character: sly, text: "*We're* the reason he got expelled!" },
    () => narration.dialogue = { character: steph, text: "Sly! If word gets out about that... well, actually, it wouldn't matter, *he's* the one who shot himself up." },
    () => { narration.dialogue = "I'm fumbling for a new subject." },
    () => narration.dialogue = { character: mc, text: "So, you're all family?" },
    () => { narration.dialogue = "I realize too late this topic is no better:" },
    () => narration.dialogue = { character: sly, text: "Adopted family." },
    () => narration.dialogue = { character: steph, text: "Sly and I were best friends growing up and James here needed a mama, so Sly adopted him!" },
    () => narration.dialogue = { character: james, text: "We're not actually related." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: james, text: "Yeah, I like to say that this last semester I was in *foster care* and Sly picked me up somewhere in there." },
    () => narration.dialogue = { character: sly, text: "James is just a baby. A freshman like you!" },
    () => narration.dialogue = { character: james, text: "And *you're* just a sophomore!" },
    () => narration.dialogue = { character: sly, text: "I went to medical school for two years before coming here, I think that counts as *at least* 6 years!" },
    () => { narration.dialogue = "I'm dizzy, and my blood's rushing." },
    () => narration.dialogue = { character: mc, text: "Um... why did you switch degrees?" },
    () => narration.dialogue = { character: sly, text: "My mom was all in the medical field, and since I'm great with kids- I had 6- " },
    () => narration.dialogue = { character: james, text: "They were actually her siblings." },
    () => narration.dialogue = { character: sly, text: "Yeah, whatever. I tried it because I thought I'd love it, but I HATED it! When we started getting into anatomy, I realized how gross the whole thing is. I changed diapers, but that's a little different from changing *livers*, know what I mean?" },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: sly, text: "So I'm trying out architecture now. What are you going for, Peter?" },
    () => narration.dialogue = { character: mc, text: "...uh......just getting my Gen Eds out of the way right now..." },
    () => narration.dialogue = { character: sly, text: "Why not do that at a community college?" },
    () => narration.dialogue = { character: steph, text: "Did you get a full ride or something?" },
    () => narration.dialogue = { character: mc, text: "...yeah..." },
    () => { narration.dialogue = "I knew this wouldn't go anywhere good." },
    () => narration.dialogue = { character: sly, text: "Are you going to go visit your parents on the weekend?" },
    () => narration.dialogue = { character: mc, text: "... .... .. .... ..... ..... ... ... .." },
    () => narration.dialogue = { character: james, text: "It's no worry worry if you don't. mine drive me crazy so stay here." },
    () => narration.dialogue = { character: sly, text: "You've gotta live close by, right? Nobody comes to this college from afar, sorry, we're just not tha* hot of a scene." },
    () => narration.dialogue = { character: mc, text: "... ... .. . . .. .. . ......... ... . ... .. .... ... .. . . . ...... . . . . .. .. .. .... . ..." },
    () => narration.dialogue = { character: sly, text: "Or maybe they'll come to visit you? My siblings will do that sometimes. It's quite a sight to have all 6 of them running around here, but everyone's pretty chill about it and I trust pretty much everyone here." },
    () => narration.dialogue = { character: james, text: "At least, now that *Sven's* gone." },
    () => narration.dialogue = { character: steph, text: "James! You don't have to refer to him by name!!" },
    () => narration.dialogue = { character: james, text: "Why? Peter'll never meet him." },
    () => narration.dialogue = { character: steph, text: "Say, Peter, where's the rest of your luggage?" },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: james, text: "Is that all your luggage? Man, that sucks." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: mc, text: "So... um... what are you going for, Stephanie?" },
    () => narration.dialogue = { character: steph, text: "Oh, me?" },
    () => { narration.dialogue = "I shouldn't have asked her. I shouldn't have directed a question at her. She reminds me too much..." },
    () => narration.dialogue = { character: steph, text: "I'm going for childhood education! Actually just have 1 more class; it wasn't available previous semester, so now I've got to take it this one!" },
    () => narration.dialogue = { character: steph, text: "I'm honestly surprised my parents are bothering to pay for me to stay in the dorms right now, but both of them want me to get the *\"college experience\"*." },
    () => narration.dialogue = { character: steph, text: "I think I've had plenty of it already, though." },
    () => narration.dialogue = { character: sly, text: "Hey. *I* wouldn't let you go anyway." },
    () => narration.dialogue = { character: steph, text: "...we'd see each other still." },
    () => narration.dialogue = { character: james, text: "I'm going for computer science." },
    () => narration.dialogue = { character: mc, text: "Oh, cool! You like computers?" },
    () => narration.dialogue = { character: james, text: "Yeah, I used to use MS Paint all the time. Now I want to step up my game." },
    () => narration.dialogue = { character: james, text: "I also installed Windows once. I just think computer skills are important." },
    () => narration.dialogue = { character: sly, text: "Steph and I are placing bets whether or not he'll switch degrees once he gets into the real *classes*. \n\nHe's still just taking Gen Eds, so we won't know for at least another semester." },
    () => narration.dialogue = { character: james, text: "Haha, Sly thinks I made a rash decision, but I think computers are what I wanna do with my life." },
    () => narration.dialogue = { character: steph, text: "James, you gotta figure out what you wa want to *do* in computers. You're not seeing the trees for the forest." },
    () => narration.dialogue = { character: james, text: "...I think you said that wrong." },
    () => narration.dialogue = { character: steph, text: "No, you're always looking at these big ideas and ignoring the actual *reality* of things! Computer Science isn't just an easy degree either. I'm worried these classes are going to kill you!" },
    () => narration.dialogue = { character: james, text: "I'll be fine!" },
    () => narration.dialogue = { character: steph, text: "Death." },
    () => narration.dialogue = { character: steph, text: "...hey Peter, are you okay?" },
    () => narration.dialogue = { character: mc, text: "So, what snacks did you bring?" },
    () => narration.dialogue = { character: steph, text: "Oh!" },
    () => { narration.dialogue = "She opens the tray. Inside are cookies, brownies, candies, a pie, cake pieces... James quickly grabs a few. Sly takes some too." },
    () => narration.dialogue = { character: mc, text: "How do you bake all this?!" },
    () => narration.dialogue = { character: steph, text: "Baking helps me relax. It's really no work for me, and it's a good way to unwind!" },
    () => narration.dialogue = { character: mc, text: "...I had to do all the cooking as a kid." },
    () => { narration.dialogue = "...did I just let that slip?" },
    () => narration.dialogue = { character: steph, text: "Awesome! Maybe we can swap recipes sometime!" },
    () => narration.dialogue = { character: mc, text: "I can do... I don't need... I mean..." },
    () => narration.dialogue = { character: james, text: "\"You can do?\" Is that what the kids are saying today?" },
    () => narration.dialogue = { character: sly, text: "James, you *are* a kid!" },
    () => narration.dialogue = { character: james, text: "Sly, I am so out of the loop!" },
    () => narration.dialogue = { character: sly, text: "Well, then, Peter, we'll have to try out your cooking someday!" },
    () => narration.dialogue = { character: steph, text: "Oh! If you want... you can even come over today! You'll be surprised what you can make in a dorm with some know-how and tricks! *Did you know you can make cake in a microwave?!?!*" },
    () => { narration.dialogue = "They can see I'm stressing out. I push it all down." },
    () => narration.dialogue = { character: sly, text: "...It's fine to be scared." },
    () => narration.dialogue = { character: mc, text: "?!" },
    () => narration.dialogue = { character: sly, text: "I know you're an adult now, but it's okay to be scared. You don't have to feel ashamed of feeling.  It's okay to feel." },
    () => { narration.dialogue = "...they have no idea. But I'm glad." },
    () => narration.dialogue = { character: sly, text: "...that's right." },
    () => narration.dialogue = { character: james, text: "...who told you you're a scary guy, Peter? You don't seem scary at all." },
    () => narration.dialogue = { character: mc, text: "My mom." },
    () => { narration.dialogue = "I just said that. Why?" },
    () => { narration.dialogue = "Crap. Crap crap crap. Why am I crying?" },
    () => narration.dialogue = { character: steph, text: "Are you okay?" },
    () => { narration.dialogue = "Sly comes over and sits down beside me. She locks eyes with with me." },
    () => narration.dialogue = { character: sly, text: "...why are you scary?" },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: sly, text: "Is that why your parents sent you here?" },
    () => narration.dialogue = { character: james, text: "Sly!" },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: steph, text: "...I can't imagine being told by your own *mother* you're scary." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: steph, text: "...but if you really *were*, I suspect you wouldn't be here." },
    () => narration.dialogue = { character: james, text: "...Right?" },
    () => { narration.dialogue = "...I want to run. But I don't know this place; there's nowhere to run. And I can't lose this room... So the best I can do is make *them* run." },
    () => { narration.dialogue = "By telling them the truth." },
    () => narration.dialogue = { character: mc, text: "...I'm the reason..." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => { narration.dialogue = "If I tell them the truth, they'll leave me alone." },
    () => { narration.dialogue = "...and I won't risk hurting any of *them* too." },
    () => narration.dialogue = { character: mc, text: "...Mom committed suicide because of me..." },
    () => { narration.dialogue = "..." },
    () => { narration.dialogue = "...why don't they leave?" },
    () => { narration.dialogue = "That's right, Sly's looking out for James." },
    () => { narration.dialogue = "If I don't share *everything* now, she's going to get me framed for something and I won't have a place to live a anymore." },
    () => narration.dialogue = { character: mc, text: "...she was..." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => { narration.dialogue = "They just look at me sadly." },
    () => narration.dialogue = { character: mc, text: "...addicted to heroin and I couldn't tell *anyone*." },
    () => narration.dialogue = { character: mc, text: "...told me she'd gut me like a pig if I did." },
    () => narration.dialogue = { character: mc, text: "I recommended to her..." },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: mc, text: "...I recommend to her \"why don't you end this?\" I told her I *hated* her. *And* what she did to my littl sister..." },
    () => { narration.dialogue = "Crap, now I look like the villain again. But I am. Aren't I?" },
    () => narration.dialogue = { character: mc, text: "...she sold all of my sister's dolls, toys, school supplies, for dirt cheap just to try to get another fix. She started stealing; she got in with the wrong crowd. She wanted out." },
    () => narration.dialogue = { character: mc, text: "The police were coming though, because... because I called them. Because mean people were coming to hurt Mom." },
    () => narration.dialogue = { character: mc, text: "She couldn't have that. I'd just royally $%*@!& up, and she threatened to *kill* me, but... she couldn't bring herself to do it." },
    () => narration.dialogue = { character: mc, text: "She had a few days' supply of heroin. She... she took it all at once." },
    () => narration.dialogue = { character: mc, text: "Locked herself in her room. Screamed at me, \"You hate me anyway!\" and wouldn't stop screaming it, even though I begged her to come out." },
    () => narration.dialogue = { character: mc, text: "Those were the last words I heard from her." },
    () => {
        narration.dialogue = { character: mc, text: "My sister and I were taken to be put into foster care. We were told we would be together, " }
        narration.dialogGlue = true
    },
    () => narration.dialogue = { character: mc, text: "but we were put into separate homes." },
    () => narration.dialogue = { character: mc, text: "..nobody wanted to adopt me; I was 15 at the time my mom killed herself. Teens don't get adopted." },
    () => narration.dialogue = { character: mc, text: "And when the first potential couple came in and heard about my story, they blamed me for everything- called me a \"demon spawn\"- and left in a huff." },
    () => narration.dialogue = { character: mc, text: "...I never got another chance." },
    () => narration.dialogue = { character: mc, text: "I only have a place to live here now because I was a good student. But who knows about next semester, or next year? Or once I graduate?" },
    () => narration.dialogue = { character: mc, text: "I'm amazed that I got a room at all; just two weeks ago they said there was *nothing*." },
    () => narration.dialogue = { character: mc, text: "...so there. Have I finally scared you away?" },
    () => narration.dialogue = { character: mc, text: "I don't want to look at any of them." },
    () => narration.dialogue = { character: mc, text: "A hand gently rubs my back." },
    () => narration.dialogue = { character: sly, text: "You don't really want us to leave, do you?" },
    () => narration.dialogue = { character: mc, text: "?!?!" },
    () => narration.dialogue = { character: sly, text: "..." },
    () => narration.dialogue = { character: sly, text: "...because if you're willing to be honest about whether you want to be here with us or alone elsewhere, *we're* willing to help you ou either way." },
    () => narration.dialogue = { character: sly, text: "It wasn't your fault." },
    () => { narration.dialogue = "I burst out crying." },
    () => narration.dialogue = { character: mc, text: "...I look like such an idiot." },
    () => narration.dialogue = { character: sly, text: "No you don't. And you probably saved your *and* your little sister's lives. If the people coming for your mom had gotten to your house, *who* knows what they would have done to you both." },
    () => { narration.dialogue = "I can't stop." },
    () => narration.dialogue = { character: steph, text: "You did the best you knew how." },
    () => { narration.dialogue = "I feel a tissue press against my hands. I suddenly realize that snot is dripping through my fingers. Gross." },
    () => narration.dialogue = { character: james, text: "I cried for like a week when I first came. These two are champs, don't worry about it." },
    () => narration.dialogue = { character: sly, text: "So, be honest with us right now. *Do you* want to stick around us for a while? Or, do you truly want to be left alone? Because we're all willing to deal with this \"very dangerous\" person." },
    () => narration.dialogue = { character: sly, text: "Will you be honest with your feelings and with us?" },
    () => narration.dialogue = { character: mc, text: "...yes." },
    () => narration.dialogue = { character: sly, text: "Are you willing to try being a friend and having friends?" },
    () => narration.dialogue = { character: mc, text: "..." },
    () => narration.dialogue = { character: sly, text: "Because I'm willing to give you a shot." },
    () => narration.dialogue = { character: mc, text: "...absolutely." },
    () => { narration.dialogue = "I feel lighter. A wave of something I'm not sure I've ever felt washes over me." },
    () => { narration.dialogue = "It's peace; it's rest; it's something different." },
    () => { narration.dialogue = "Like, even though it'll be hard, maybe I could actually be open here." },
    () => { narration.dialogue = "I think this is the beginning of what people call..." },
    () => { narration.dialogue = "...freedom..." },
]);