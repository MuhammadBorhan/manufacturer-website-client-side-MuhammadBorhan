import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/profile`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProfiles(data))

    }, []);

    const handleProfile = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const district = event.target.district.value;
        const phone = event.target.phone.value;
        const linkdien = event.target.linkdien.value;

        const updateProfile = { name, email, education, district, phone, linkdien };

        const url = `http://localhost:5000/profile`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset()
            })
    }
    return (
        <div>
            <h4 className='mt-5 mb-3 text-center text-green-600 text-3xl font-bold'>My profile</h4>
            <div>
                <form onSubmit={handleProfile} className='grid grid-cols-1 gap-4 justify-items-center'>
                    <input type="text" name='name' value={user.displayName} disabled className="input input-bordered text-xl font-bold w-full max-w-xs" />
                    <input type="email" name='email' value={user.email} disabled className="input input-bordered text-xl font-bold w-full max-w-xs" />
                    <input type="text" name='education' placeholder="Education Quality" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='district' placeholder="District" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='linkdien' placeholder="LinkedIn Link" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Update' className="btn input-bordered w-full max-w-xs" />
                </form>
            </div>
            <div>
                <div>
                    {
                        profiles.map(profile => <div key={profile._id} className='bg-slate-600 p-4 text-white'>
                            <div>
                                <p className='flex justify-center items-center gap-1'><span>{profile.name}</span></p>
                                <p>{profile.email}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProfile;