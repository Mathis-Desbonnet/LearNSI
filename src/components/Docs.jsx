import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Docs() {
    return(
        <Box>
            <Navbar />
            <Box margin={10}>
                <Typography align="center" variant="h3" gutterBottom>
                La programmation orientée objet
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Introduction
                </Typography>

                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                La programmation orientée objet (POO) est une méthode de programmation qui permet de structurer le code de manière à le rendre plus facile à comprendre et à maintenir. 
                Elle consiste à organiser le code autour d'objets qui ont des attributs et des méthodes.
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Création de classes
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                En POO, nous créons des classes qui définissent les caractéristiques et les comportements d'un objet. Une classe est comme un moule qui sert à créer des objets. Pour créer une classe en Python, nous utilisons le mot-clé "class" suivi du nom de la classe.
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Création d'objets
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                Une fois que nous avons créé une classe, nous pouvons créer des objets à partir de cette classe. Un objet est une instance d'une classe. Pour créer un objet en Python, nous appelons le nom de la classe suivi de parenthèses.                
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Attributs
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                Les attributs sont des variables qui contiennent des données associées à un objet. Ils sont utilisés pour stocker des informations sur l'objet. Les attributs sont définis dans la classe et peuvent être accessibles à partir de l'objet en utilisant la notation point.            
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Méthodes
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                Les méthodes sont des fonctions qui sont définies dans une classe. Elles sont utilisées pour définir les comportements d'un objet. Les méthodes peuvent accéder aux attributs de l'objet en utilisant le mot-clé "self".
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Héritage
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                L'héritage est une caractéristique importante de la POO qui permet de créer une nouvelle classe à partir d'une classe existante. La nouvelle classe hérite des attributs et des méthodes de la classe existante. Cela permet de réutiliser du code et d'éviter la répétition.
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Modules
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                Les modules sont des fichiers qui contiennent du code Python qui peut être utilisé dans d'autres programmes. Les modules sont importés dans un programme en utilisant le mot-clé "import". Cela permet de réutiliser du code et de faciliter la gestion des programmes.
                </Typography>

                <Typography align="center" variant="h4" gutterBottom>
                Résumé
                </Typography>
                <Typography align="center" variant="h7" gutterBottom sx={{fontSize: "20px"}}>
                La programmation orientée objet est une méthode de programmation qui permet de structurer le code autour d'objets. Les objets ont des attributs et des méthodes qui définissent leur comportement. Les classes sont utilisées pour définir les caractéristiques d'un objet, et l'héritage permet de réutiliser du code. Les modules sont utilisés pour importer du code dans d'autres programmes.
                </Typography>   
            </Box>
        </Box>
        
    );
}

export default Docs;