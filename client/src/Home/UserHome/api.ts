import { baseURL } from '../../util/baseURL';
import Cookies from 'universal-cookie';

export async function getHabits(inputDate: string) {
  const cookies = new Cookies();

  return await baseURL
    .get(`/habit/get/${inputDate}`, {
      headers: {
        'x-refresh':
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFsZnJlZCIsImVtYWlsIjoiYWxmcmVkQHRlc3QuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0wMi0wOVQwMzozODo0OS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wMi0wOVQwMzozODo0OS4wMDBaIiwic2Vzc2lvbiI6MywiaWF0IjoxNjc1OTI0MDQ2LCJleHAiOjE3MDc0ODE2NDZ9.dI4RiA1bVLKPy-i-GlgzIjt3hJEbUoL_6YOtKGN5Zkyi7qcgk5fwe5skBCnJWei9M6nesnUCP89ugKI9is6boFoJut8h9Ur8WxNv8jMRbStcAdT4EJLpPGoqr0vBQyWb6cucGWcrq3DIzMSYch675CyOL0XYp4rs1urlRpy8za-9cUONRpEP4PI6_hegoge4IjPP1aS_j64bv23YR53LG_aZmjpIpc6SowjTsJpo7YgyoTJf_NHU-JzeqKhRUBKjytWw5I8MgJhMDUqqMiU0zv1G05qyjQbYmTXEAFvU9GPJUQJNWQ60jrunKkxfh-WRuS-HZncBCpviryrzT5PeEQ',
        authorization: `Bearer ${cookies.get('Example')}`,
      },
    })
    .then((res) => res.data);
}
