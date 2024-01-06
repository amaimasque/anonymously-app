import "./Home.css";
import Container from "../../components/Container";
import Post from "../../components/Post";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const samplePost = {
  user: {
    username: "AnonymityCreed",
  },
  id: 4,
  post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in. Laoreet id donec ultrices tincidunt arcu non. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Iaculis eu non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Erat nam at lectus urna duis. Bibendum est ultricies integer quis auctor. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Vitae justo eget magna fermentum. Interdum varius sit amet mattis vulputate enim. Sit amet est placerat in egestas erat. Suspendisse ultrices gravida dictum fusce ut placerat orci. Id eu nisl nunc mi. Proin sed libero enim sed faucibus turpis in. Sollicitudin tempor id eu nisl. Posuere morbi leo urna molestie at elementum eu facilisis. Ut venenatis tellus in metus vulputate. Commodo viverra maecenas accumsan lacus vel. Aliquam id diam maecenas ultricies mi eget. Cras ornare arcu dui vivamus arcu felis. Fusce id velit ut tortor pretium viverra suspendisse. Netus et malesuada fames ac turpis egestas. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Cursus eget nunc scelerisque viverra mauris. Erat nam at lectus urna duis convallis. Libero enim sed faucibus turpis in eu mi. Diam sit amet nisl suscipit adipiscing bibendum est. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Pellentesque adipiscing commodo elit at. Ultrices vitae auctor eu augue ut lectus arcu. Posuere sollicitudin aliquam ultrices sagittis. Non odio euismod lacinia at quis risus sed vulputate. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Quis hendrerit dolor magna eget est. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis purus sit amet volutpat consequat mauris nunc congue. Dictumst vestibulum rhoncus est pellentesque. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Diam donec adipiscing tristique risus nec. Ipsum consequat nisl vel pretium lectus quam id. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. In est ante in nibh mauris cursus mattis molestie a.",
  photo:
    "https://images.pexels.com/photos/10223476/pexels-photo-10223476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  video: null,
};
export const ViewPost = () => {
  const params = useParams(); // params.id
  console.log(params);

  useEffect(() => {
    window &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, []);

  return (
    <Container additionalStyles={{ paddingBottom: 60 }}>
      <Post
        postInfo={samplePost}
        userInfo={samplePost.user}
        key={samplePost.id}
        truncatePost={false}
      />
    </Container>
  );
};
