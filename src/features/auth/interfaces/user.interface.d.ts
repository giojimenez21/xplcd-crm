interface User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  idLocation: number;
  location: string;
  idRole: number;
  role: Roles;
  isVerified: boolean;
}

type Roles = 'ADMIN' | 'WAREHOUSE' | 'SALESMAN' | 'WHOLESALER';
