export const handleMushroomClick = (mushroom, setSelectedMushroom, router) => {
    setSelectedMushroom(mushroom); // Update context
    router.push("/mushroom"); // Navigate to MushroomPage
};

export {handleMushroomClick}