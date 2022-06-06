import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <Header />
      <h1>ABOUT PAGE</h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  It was a really fun experience and I already feel that it has
                  given me tools which will help me through the course. It
                  taught me a lot about working as a team together in Github and
                  I had to push my limits when it came to coding. My teammates
                  were super and so supportive of us who didn't have much
                  experience.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/26112302_1728881300495208_2612706477539443059_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-GObD5PnXmgAX-jW7nW&_nc_ht=scontent-dfw5-1.xx&oh=00_AT8dH1c18-nrJ7GNm5MiY-k3pUiZUgupgBO3XClNAIUfmw&oe=62C25378"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Jainesh P
                    </span>
                    <span class="text-gray-500 text-sm">
                      Software Engineer, Capital One
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Code Institute prepared me for a graduate role in IT. The
                  skills I gained from doing this course is priceless for a
                  career changer. A special thanks to the career team, the work
                  they have done is phenomenal! Interviewing is a skill that can
                  be learned. The career team did exactly that! It taught us a
                  valuable skill that not many other courses teach! Highly
                  recommend it to anyone who is looking to change their career
                  to IT!
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/22555194_10212659937646255_2406268669937208554_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=FzcZqFxR9gAAX-OvusJ&_nc_ht=scontent-dfw5-2.xx&oh=00_AT9RDY9dM1d-R3hWXhBw6Jh0SHKFfWzABqjcENc7u8e1yg&oe=62C389B0"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Vishal Dave
                    </span>
                    <span class="text-gray-500 text-sm">CEO, Daves</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
