public class QuickFindUF
{
  private int[] id;

  public QuickFindUF(int N) {
    id = new int[N];
    for (int i = 0; i < N; i++) {
      id[i] = i;
    }
  }

  public boolean connected(int p, int q) {
    return id[p] == id[q];
  }

  public void union(int p, int q) {
    int pid = id[p];
    int qid = id[q];
    for (int i = 0; i < id.length; i++) {
      if (id[i] == pid) id[i] = qid;
    }
  }
}

public class QUickUnionUF {
  private int[] id;
  public QUickUnionUF(int N) {
    id = new int[N]
    for (int i = 0; i < N; i++) {
      id[i] = i;
    }
  }
  private int root(int i) {
    while (i != id[i]) {
      i = id[i];
    }
    return i;
  }
  public boolean connected (int p, int q) {
    return root(p) == root(q);
  }
  public void union(int p, int q) {
    int i = root(p);
    int j = root(q);
    id[i] = j;
  }
}