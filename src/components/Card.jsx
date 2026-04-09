
import cameraIcon from "/profile-camera.png";

export function Card({ picture, name, email, bio }) {
    return (
        <>
            <div className="mt-7.5 px-5">
                <div className="flex gap-5">
                    <div className="relative">
                        <img src={picture} alt={`${name} profile picture`} width="76px" height="76px" />
                        <img src={cameraIcon} alt="upload image icon" className="absolute bottom-0 right-0" width="21px" height="23px" />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium">{name}</p>
                        <p className="text-[14px]">{email}</p>
                    </div>
                </div>
                <p className="mt-7.5 text-[14px] leading-5.5">{bio}</p>
            </div>
            <div className="h-full border-t border-b border-dashed mt-3 mb-7 border-light-gray"></div>
        </>
    );
}
