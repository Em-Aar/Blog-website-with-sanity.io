import { PortableTextComponents } from '@portabletext/react';



export const components: PortableTextComponents = {
    marks: {
        em: ({ children }) => {
            return <em className="italic">{children}</em>;
        },
        strong: ({ children }) => {
            return <strong className="font-bold">{children}</strong>;
        }
    },

    block: {
        h4: ({ children }) => {
            return <h4 className='text-3xl'>{children}</h4>;
        }
    },

    list: {
        bullet: ({ children }) => {
            return <ul className="list-disc list-inside">{children}</ul>;
        }
    },


};
