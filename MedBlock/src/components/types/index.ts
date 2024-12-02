export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    socialLinks: {
        twitter?: string;
        linkedin?: string;
        facebook?: string;
    };
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
    rating: number;
}

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    link: string;
}

export interface Patient {
    id: string;
    publicAddress: string;
    name: string;
    DOB: string;
    url: string;
    email: string;
    control: string;
    gender: string;
    aadhar: string;
    patientId: string;
    lastVisit?: string;
    disease?: string[];
    status?: 'active' | 'inactive';
}