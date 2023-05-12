interface SanityBody {
    _createdAt: string;
    _rev: string;
    _id: string;
    _updatedAt: string;
};

interface SanityImage{
    asset: {
        _ref: string
        _type: "reference";
    }
    _type: "image"
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface SkillType extends SanityBody {
    image: SanityImage
    _type: "skill"
    progress: string
    title: string
}

export interface Experience extends SanityBody {
    jobTitle: string;
    technologies: SkillType[];
    companyImage: SanityImage;
    isCurrentlyWorkingHere?: boolean;
    _type: "experience";
    company: string;
    points: string[];
    dateStarted: string;
    dateEnded?: string;
}

export interface PageInfo extends SanityBody {
    heroImage: SanityImage;
    _type: "pageInfo"
    backgroundInfomation: string;
    address: string;
    phoneNumber: string;
    email: string;
    profilePic: SanityImage;
    role: string;
    name: string;
    socials: Social[]
}

export interface Projects extends SanityBody {
    summary: string;
    linkToBuild: string;
    title: string
    technologies: SkillType[]
    image: SanityImage
    _type: "project"
}