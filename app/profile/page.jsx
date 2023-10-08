"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Particles from "@components/particles";

import Profile from "@components/Profile";

const MyProfile = () => {
  
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in bg-black"
        quantity={300} 
        speed={1}
      />
          <Profile
          name='My'
          desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
          data={myPosts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          />
    </div>
    
  );
};

export default MyProfile;
