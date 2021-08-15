#include <iostream>
#include<vector>

using namespace std;
int count = 1;
void printV(vector<vector<int> > matrix){
	cout << count++ << endl;
    cout << "------\n";
    for(int i = 0; i < matrix.size(); i++){
        for(int j = 0; j < matrix[i].size(); j++){
            if(matrix[i][j] < 10 && matrix[i][j] >= 0)
            cout << "0";
            cout << matrix[i][j] << " ";
        }
        
        cout << endl;
    }
    cout << "------\n";
    
}

void dfs(vector<vector<int> > matrix, int x, int y, int len){
    if(x == 0 && y == 1 && len >= matrix.size()*matrix[0].size()-3){
        printV(matrix);
        return;
    }
    if(x+1 < matrix.size() && matrix[x+1][y] == -1){
        matrix[x+1][y] = len;
        dfs(matrix, x+1, y, len + 1);
        matrix[x+1][y] = -1;
    }
    
    if(y+1 < matrix[0].size() && matrix[x][y+1] == -1){
        matrix[x][y+1] = len;
        dfs(matrix, x, y+1, len + 1);
        matrix[x][y+1] = -1;
    }
    
    if(x-1 > -1 && matrix[x-1][y] == -1){
        matrix[x-1][y] = len;
        dfs(matrix, x-1, y, len + 1);
        matrix[x-1][y] = -1;
    }
    
    if(y-1 > -1 && matrix[x][y-1] == -1){
        matrix[x][y-1] = len;
        dfs(matrix, x, y-1, len + 1);
        matrix[x][y-1] = -1;
    }
    
}

int main() {
	// your code goes here
	vector<vector<int> > matrix(5, vector<int> (5, -1));
	matrix[0][0] = 0;
	matrix[1][0] = 1;
	
	dfs(matrix, 1, 0, 2);
	
// 	printV(matrix);
	return 0;
}
